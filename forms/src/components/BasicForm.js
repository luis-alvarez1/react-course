import { useEffect, useState } from 'react';
import { validateEmail } from '../helpers/email';
import { isNotEmpty } from '../helpers/input';
import { useInput } from '../hooks/useInput';

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    hasError: hasFirstNameError,
    isValueValid: isFirstNameValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => isNotEmpty(value));

  const {
    value: lastNameValue,
    hasError: hasLastNameError,
    isValueValid: isLastNameValid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => isNotEmpty(value));

  const {
    value: emailValue,
    hasError: hasEmailError,
    isValueValid: isEmailValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => validateEmail(value));

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (isFirstNameValid && isLastNameValid && isEmailValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEmailValid, isFirstNameValid, isLastNameValid]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      resetEmail();
      resetFirstName();
      resetLastName();
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className='control-group'>
        <div className={!hasFirstNameError ? 'form-control' : 'form-control invalid'}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {hasFirstNameError && <p className='error-text'>Invalid Name</p>}
        </div>
        <div className={!hasLastNameError ? 'form-control' : 'form-control invalid'}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
          />
          {hasLastNameError && <p className='error-text'>Invalid Name</p>}
        </div>
      </div>
      <div className={!hasEmailError ? 'form-control' : 'form-control invalid'}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailValue}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {hasEmailError && <p className='error-text'>Invalid Email</p>}
      </div>
      <div className='form-actions'>
        <button type='submit' disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
