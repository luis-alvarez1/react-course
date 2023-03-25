import {
  DECREMENT_COUNTER,
  INCREASE_BY,
  INCREMENT_COUNTER,
  RESET_COUNTER,
} from '../types/counterTypes';

const initialState = { counter: 0 };

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNTER:
      return { counter: state.counter + 1 };

    case INCREASE_BY:
      return { counter: state.counter + payload };

    case DECREMENT_COUNTER:
      return { counter: state.counter - 1 };

    case RESET_COUNTER:
      return initialState;

    default:
      return state;
  }
};
