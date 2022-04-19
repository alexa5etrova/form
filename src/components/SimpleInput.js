import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isEnteredNameTouched, setIsEnteredNameTouched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  let isEnteredNameValid = enteredName.trim() !== "";
  let nameInputIsInvalid = !isEnteredNameValid && isEnteredNameTouched;

  useEffect(() => {
    if (isEnteredNameValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEnteredNameValid]);

  let nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  let nameInputBlurHandler = () => {
    setIsEnteredNameTouched(true);
  };

  let formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsEnteredNameTouched(true);
    if (!isEnteredNameValid) {
      return;
    }
    setEnteredName("");
    setIsEnteredNameTouched(false);
  };

  const formControlClasses = nameInputIsInvalid
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
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
