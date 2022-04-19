import { useState } from "react";

const useNewinput = (validateValue) => {
  const [enteredValue, setEneteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let isEnteredValueValid = validateValue(enteredValue);
  let hasError = !isEnteredValueValid && isTouched;

  let inputChangeHandler = (event) => {
    setEneteredValue(event.target.value);
  };

  let inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  let reset = () => {
    setEneteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isEnteredValueValid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useNewinput;
