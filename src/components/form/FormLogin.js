import InputForm from "./InputForm";
import ButtonSubmit from "../buttons/ButtonSubmit";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LocaleContext from "../../context/LocaleContext";
import PropTypes from "prop-types";
import Loading from "../layouts/Loading";

const FormLogin = ({ onLoginSubmit, loading }) => {
  const [inputEmail, setInputEmail, resetInputEmail] = useInput();
  const [inputPassword, setInputPassword, resetInputPassword] = useInput();
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onLoginSubmit({
      email: inputEmail,
      password: inputPassword,
    });
    resetInputEmail();
    resetInputPassword();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mt-5 lg:mt-10 p-5 rounded-lg border border-gray-300 bg-white dark:bg-slate-800 mx-2.5 w-full lg:w-7/12 lg:mx-auto"
    >
      <div className="mb-6">
        <InputForm
          inputValue={inputEmail}
          placeholderValue={"Email..."}
          classNameInput={
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-yellow-500 focus:border-yellow-500"
          }
          onChangeFunction={setInputEmail}
          type={"email"}
        />
      </div>
      <div className="mb-6">
        <InputForm
          inputValue={inputPassword}
          placeholderValue={"Password..."}
          classNameInput={
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-yellow-500 focus:border-yellow-500"
          }
          onChangeFunction={setInputPassword}
          type={"password"}
        />
      </div>

      <div className="mt-5 flex gap-x-4 items-center">
        <ButtonSubmit text={locale === "id" ? "Login" : "Masuk"} />
        <button
          onClick={() => navigate("/register")}
          className="text-white dark:text-violet-900 bg-violet-800  dark:bg-violet-200 hover:bg-violet-600 hover:text-white focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Register
        </button>
      </div>
    </form>
  );
};

FormLogin.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default FormLogin;
