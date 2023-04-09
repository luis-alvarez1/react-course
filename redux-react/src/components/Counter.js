import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { counterActions } from '../redux/reducers/counterReducer';

const Counter = () => {
  const dispatch = useDispatch();
  const [increaseByValue, setIncreaseByValue] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const isCounterVisible = useSelector((state) => state.counter.isVisible);

  const increaseByValueChange = (event) => {
    const number = parseInt(event.target.value);
    setIncreaseByValue(number);
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseByHandler = () => {
    dispatch(counterActions.increaseBy(increaseByValue));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const resetHandler = () => {
    dispatch(counterActions.resetCounter());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterVisible && <div className={classes.value}>{counter}</div>}
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
