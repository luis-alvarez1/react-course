import React, { useEffect, useState } from 'react';
import { validateEmail } from '../helpers/email';
import { useInput } from '../hooks/useInput';

const SimpleInput = () => {
  const {
    value: enteredName,
    isValueValid: isInputValid,
    hasError: isInvalid,
    valueChangeHandler: inputHandler,
    valueBlurHandler: inputBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== '');
  const {
    value: enteredEmail,
    isValueValid: isEmailValid,
    hasError: isEmailInvalid,
    valueChangeHandler: emailHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => validateEmail(value));

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (isEmailValid && isInputValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEmailValid, isInputValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isInputValid) {
      return;
    }

    resetName();
    resetEmail();
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
