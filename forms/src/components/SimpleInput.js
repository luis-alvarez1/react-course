import React, { useEffect, useState } from 'react';
import { validateEmail } from '../helpers/email';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const [isInputEdited, setisInputEdited] = useState(false);
  const [isEmailEdited, setIsEmailEdited] = useState(false);

  const isInputValid = enteredName.trim() !== '';
  const isInvalid = !isInputValid && isInputEdited;

  const isEmailInvalid = !(validateEmail(enteredEmail) && enteredEmail !== '') && isEmailEdited;

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (!isEmailInvalid && isInputValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEmailInvalid, isInputValid]);

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const inputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputBlurHandler = () => {
    setisInputEdited(true);
  };

  const emailBlurHandler = () => {
    setIsEmailEdited(true);
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
      <div className={!isEmailInvalid ? 'form-control' : 'form-control invalid'}>
        <label htmlFor='email'>Your Email</label>
        <input
          onBlur={emailBlurHandler}
          onChange={emailHandler}
          value={enteredEmail}
          type='email'
          id='email'
        />
        {isEmailInvalid && <p className='error-text'>Invalid Email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid} type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
