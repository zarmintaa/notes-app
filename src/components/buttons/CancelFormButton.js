import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../../context/LocaleContext";

const CancelFormButton = ({ clearSubmit }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <button
      type="button"
      onClick={clearSubmit}
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
    >
      X {locale === "id" ? "Batal" : "Cancel"}
    </button>
  );
};

CancelFormButton.propTypes = {
  clearSubmit: PropTypes.func.isRequired,
};

export default CancelFormButton;
