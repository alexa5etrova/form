import useNewinput from "./../hooks/use-newinput";
import { useState, useEffect } from "react";

const BasicForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    value: enteredNameValue,
    hasError: hasNameError,
    isEnteredValueValid: isNameInputValid,
    inputChangeHandler: nameInputHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameValue,
  } = useNewinput((value) => value.trim() !== "");
  const {
    value: enteredLastNameValue,
    hasError: hasLastNameError,
    isEnteredValueValid: isLastNameInputValid,
    inputChangeHandler: lastNameInputHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameValue,
  } = useNewinput((value) => value.trim() !== "");
  const {
    value: enteredEmailValue,
    hasError: hasEmailError,
    isEnteredValueValid: isEmailInputValid,
    inputChangeHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailValue,
  } = useNewinput((value) => value.includes("@"));

  let nameControlClasses = hasNameError
    ? "form-control invalid"
    : "form-control";
  let lastNameControlClasses = hasLastNameError
    ? "form-control invalid"
    : "form-control";
  let emailControlClasses = hasEmailError
    ? "form-control invalid"
    : "form-control";

  useEffect(() => {
    if (isNameInputValid && isLastNameInputValid && isEmailInputValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isNameInputValid, isEmailInputValid, isLastNameInputValid]);

  let formSubmitionHandler = (event) => {
    event.preventDefault();
    if (!isNameInputValid || !isEmailInputValid || !isLastNameInputValid) {
      return;
    }
    resetNameValue();
    resetEmailValue();
    resetLastNameValue();
  };

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className="control-group">
        <div className={nameControlClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            onChange={nameInputHandler}
            onBlur={nameBlurHandler}
            id="name"
            value={enteredNameValue}
          />
          {hasNameError && <p className="error-text">Please enter name</p>}
        </div>
        <div className={lastNameControlClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameInputHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastNameValue}
          />
          {hasLastNameError && (
            <p className="error-text">Please enter last name</p>
          )}
        </div>
      </div>
      <div className={emailControlClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
          value={enteredEmailValue}
        />
        {hasEmailError && (
          <p className="error-text">Please enter valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
