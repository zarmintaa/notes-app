import { useContext, useEffect, useState } from "react";
import ButtonSubmit from "../buttons/ButtonSubmit";
import CancelFormButton from "../buttons/CancelFormButton";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import InputForm from "./InputForm";
import LocaleContext from "../../context/LocaleContext";

const FormAddNote = ({ submitData, currentTitle, currentBody }) => {
  const [title, setTitle] = useState(currentTitle);
  const [body, setBody, resetBody] = useInput(currentBody);
  const [wordCount, setWordCount] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitData({ title, body }, clearSubmit);
  };

  const clearSubmit = () => {
    setTitle(currentTitle);
    resetBody(currentBody);
    setIsEdit(false);
    setWordCount(0);
  };

  const titleInputChangeHandler = (e) => {
    if (e.target.value.length === 51) {
      return;
    }
    setTitle(e.target.value);
    setWordCount(e.target.value.length);
  };

  useEffect(() => {
    if (wordCount !== 0 || body !== "" || title !== "") {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [wordCount, title, body]);

  return (
    <form
      className="mt-5 lg:mt-10 p-5 rounded-lg border border-gray-300 bg-white dark:bg-slate-800 mx-2.5"
      onSubmit={onSubmitHandler}
    >
      <div className="mb-6">
        <div className="flex justify-between">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
          >
            {locale === "id" ? "Judul" : "Title"}
          </label>
          <span className="text-sm text-slate-600 dark:text-slate-200">
            {locale === "id" ? "Sisa Karakter" : "Character left"} :{" "}
            {50 - wordCount}
          </span>
        </div>
        <InputForm
          type={"text"}
          placeholderValue={"Judul..."}
          classNameInput={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 bg-gray-100 dark:bg-slate-800 dark:text-slate-300 ${
            title?.length === 50
              ? "focus:ring-red-500 focus:border-red-500"
              : "focus:ring-yellow-500 focus:border-yellow-500"
          }`}
          inputValue={title || ""}
          onChangeFunction={titleInputChangeHandler}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
          {locale === "id" ? "Isi" : "Content"}
        </label>
        <textarea
          id="body"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 bg-gray-100 dark:bg-slate-800 dark:text-slate-200  "
          placeholder="Catatan..."
          value={body || ""}
          onChange={setBody}
        />
      </div>

      <div className="flex items-center">
        <ButtonSubmit text={locale === "id" ? "+ Tambah" : "+ Add"} />
        {isEdit && <CancelFormButton clearSubmit={clearSubmit} />}
      </div>
    </form>
  );
};

FormAddNote.propTypes = {
  submitData: PropTypes.func.isRequired,
  currentTitle: PropTypes.string,
  currentBody: PropTypes.string,
};

export default FormAddNote;
