import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);

  let nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  let formSubmissionHandler = (event) => {
    event.preventDefault();
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

  const formControlClasses = isEnteredNameValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!isEnteredNameValid && (
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
