import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartVisible: false, notification: null };

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCartVisible: (state) => {
      state.cartVisible = !state.cartVisible;
    },
    showNotification: (state, action) => {
      const { status, title, message } = action.payload;
      state.notification = { status, title, message };
    },
  },
});

export const UIActions = UISlice.actions;
