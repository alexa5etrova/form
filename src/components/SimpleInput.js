import { useState, useEffect } from "react";
import useInput from "./../hooks/use-input";

const SimpleInput = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    value: enteredName,
    isValid: isEnteredNameValid,
    hasError: nameHasError,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isEnteredEmailValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  useEffect(() => {
    if (isEnteredNameValid && isEnteredEmailValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEnteredNameValid, isEnteredEmailValid]);

  let formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!isEnteredNameValid || !isEnteredEmailValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const formControlClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  let emailControlClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailControlClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">Please fill in with valid email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
