import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');

  const [isInputEdited, setisInputEdited] = useState(false);

  const isInputValid = enteredName.trim() !== '';
  const isInvalid = !isInputValid && isInputEdited;

  const inputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setisInputEdited(true);

    if (!isInputValid) {
      return;
    }

    setEnteredName('');
    setisInputEdited(false);
  };

  const inputBlurHandler = () => {
    setisInputEdited(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={!isInvalid ? 'form-control' : 'form-control invalid'}>
        <label htmlFor='name'>Your Name</label>
        <input
          onBlur={inputBlurHandler}
          onChange={inputHandler}
          value={enteredName}
          type='text'
          id='name'
        />
        {isInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
