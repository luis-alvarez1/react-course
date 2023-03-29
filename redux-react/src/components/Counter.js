import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  DECREMENT_COUNTER,
  INCREASE_BY,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from '../redux/types/counterTypes';
import { useState } from 'react';

const Counter = () => {
  const [increaseByValue, setIncreaseByValue] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const increaseByValueChange = (event) => {
    const number = parseInt(event.target.value);
    setIncreaseByValue(number);
  };

  const incrementHandler = () => {
    dispatch({ type: INCREMENT_COUNTER });
  };
  const increaseByHandler = () => {
    dispatch({ type: INCREASE_BY, payload: increaseByValue });
  };
  const decrementHandler = () => {
    dispatch({ type: DECREMENT_COUNTER });
  };
  const resetHandler = () => {
    dispatch({ type: RESET_COUNTER });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.input}>
        <label>Increase By:</label>
        <input
          id='increase_by'
          type='number'
          value={increaseByValue}
          onChange={increaseByValueChange}
        />
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByHandler}>Increase by {increaseByValue}</button>

        <button onClick={resetHandler}>Reset</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
