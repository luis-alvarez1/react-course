import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0, isVisible: true };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    increaseBy: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrement: (state) => {
      state.value--;
    },
    toggleCounter: (state) => {
      state.isVisible = !state.isVisible;
    },
    resetCounter: (state) => {
      state.value = initialState.value;
    },
  },
});

export const counterActions = counterSlice.actions;
