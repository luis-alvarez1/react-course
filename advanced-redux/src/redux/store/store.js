import { configureStore } from '@reduxjs/toolkit';
import { UISlice } from '../reducers/UISlice';
import { cartSlice } from '../reducers/cart/cartSlice';

export const store = configureStore({
  reducer: { ui: UISlice.reducer, cart: cartSlice.reducer },
});
