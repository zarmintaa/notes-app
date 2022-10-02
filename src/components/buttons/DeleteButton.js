import PropTypes from "prop-types";
import LocaleContext from "../../context/LocaleContext";
import { useContext } from "react";

const DeleteButton = ({ actionDelete, noteId }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <button
      type="button"
      onClick={() => actionDelete(noteId)}
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 focus:outline-none flex items-center gap-x-2"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        ></path>
      </svg>
      {locale === "id" ? "Hapus" : "Delete"}
    </button>
  );
};

DeleteButton.propTypes = {
  actionDelete: PropTypes.func.isRequired,
  noteId: PropTypes.string.isRequired,
};

export default DeleteButton;
