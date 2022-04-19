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

  useEffect(() => {
    if (isNameInputValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isNameInputValid]);
  let formSubmitionHandler = (event) => {
    event.preventDefault();
    if (!isNameInputValid) {
      return;
    }
    resetNameValue();
  };

  let nameControlClasses = hasNameError
    ? "form-control invalid"
    : "form-control";

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
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
