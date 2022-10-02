import PropTypes from "prop-types";

const ButtonSubmit = ({ text }) => {
  return (
    <button
      type="submit"
      className="text-white dark:text-black bg-yellow-500 hover:bg-yellow-600 dark:hover:text-white hover:text-white focus:ring-4 focus:ring-yellow-300 rounded text-sm px-5 py-2.5 mr-2 mb-2"
    >
      {text}
    </button>
  );
};

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonSubmit;
