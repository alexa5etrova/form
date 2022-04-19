import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let isEnteredValueValid = validateValue(enteredValue);
  let hasError = !isEnteredValueValid && isTouched;

  let inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  let inputBlurHandler = () => {
    setIsTouched(true);
  };

  let reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: isEnteredValueValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
