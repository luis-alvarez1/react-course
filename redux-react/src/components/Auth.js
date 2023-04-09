import { validateEmail } from '../helpers/email';
import { useInput } from '../hooks/useInput';
import { authActions } from '../redux/reducers/authReducer';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();

  const {
    value: email,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
    isValueValid: isEmailValid,
  } = useInput((value) => validateEmail(value));
  const {
    value: password,
    valueChangeHandler: passwordChangeHandler,
    reset: resetPassword,
    isValueValid: isPassWordValid,
  } = useInput((value) => value.length > 0);

  const submitForm = (event) => {
    event.preventDefault();

    if (isEmailValid && isPassWordValid) {
      dispatch(authActions.login());
      resetEmail();
      resetPassword();
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitForm}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={emailChangeHandler} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
              value={password}
              onChange={passwordChangeHandler}
              type='password'
              id='password'
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
