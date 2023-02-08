import React, { useEffect, useState, useReducer, useContext, useRef } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';

const Login = () => {
  const authCtx = useContext(AuthContext);

  const [isFormValid, setIsFormValid] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [emailState, dispatchEmail] = useReducer(
    (prevState, action) => {
      if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
      } else if (action.type === 'INPUT_BLUR') {
        return { value: prevState.value, isValid: prevState.value.includes('@') };
      }
      return { value: '', isValid: false };
    },
    { value: '', isValid: null },
  );

  const [passwordState, dispatchPassword] = useReducer(
    (prevState, action) => {
      if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };
      } else if (action.type === 'INPUT_BLUR') {
        return { value: prevState.value, isValid: prevState.value.trim().length > 6 };
      }
      return { value: '', isValid: false };
    },
    { value: '', isValid: null },
  );

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifiter = setTimeout(() => {
      setIsFormValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifiter);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (isFormValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          type='email'
          id='email'
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          label='E-mail'
          isValid={emailIsValid}
        />
        <Input
          ref={passwordInputRef}
          type='password'
          id='password'
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordIsValid}
          label='Password'
        />
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
