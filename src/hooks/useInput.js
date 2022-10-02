import { useState } from "react";

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const resetState = () => {
    setValue("");
  };

  return [value, onValueChangeHandler, resetState];
};

export default useInput;
