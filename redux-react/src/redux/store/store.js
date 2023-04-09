import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../reducers/counterReducer';
import { authSlice } from '../reducers/authReducer';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
