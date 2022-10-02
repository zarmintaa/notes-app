import PropTypes from "prop-types";

const InputForm = ({
  inputValue,
  placeholderValue,
  onChangeFunction,
  classNameInput,
  type,
}) => {
  return (
    <input
      type={type}
      className={classNameInput || ""}
      placeholder={placeholderValue || ""}
      onChange={onChangeFunction}
      value={inputValue}
      required
    />
  );
};

InputForm.propTypes = {
  inputValue: PropTypes.string.isRequired,
  placeholderValue: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
  classNameInput: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default InputForm;
