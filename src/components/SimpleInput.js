import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  const [isEnteredNameTouched, setIsEnteredNameTouched] = useState(false);

  let nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsEnteredNameValid(true);
    }
  };
  let nameInputBlurHandler = () => {
    setIsEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
    }
  };

  let formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      return;
    }
    setIsEnteredNameValid(true);

    console.log(enteredName);
    let enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName("");
  };

  const nameInputIsInvalid = !isEnteredNameValid && isEnteredNameTouched;

  const formControlClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
