import {
  DECREMENT_COUNTER,
  INCREASE_BY,
  INCREMENT_COUNTER,
  RESET_COUNTER,
  TOGGLE_COUNTER,
} from '../types/counterTypes';

const initialState = { counter: 0, isVisible: true };

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNTER:
      return { counter: state.counter + 1, ...state };

    case INCREASE_BY:
      return { counter: state.counter + payload, ...state };

    case DECREMENT_COUNTER:
      return { counter: state.counter - 1, ...state };

    case TOGGLE_COUNTER:
      return { ...state, isVisible: !state.isVisible };

    case RESET_COUNTER:
      return initialState;

    default:
      return state;
  }
};
