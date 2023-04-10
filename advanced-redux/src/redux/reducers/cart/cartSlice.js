import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0, changed: false };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart: (state, action) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart: (state, action) => {
      const item = action.payload; // new item to be added
      const existingItem = state.items.find((i) => i.id === item.id);
      if (!existingItem) {
        state.items.push({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: 1,
          total: item.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total = existingItem.total + item.price;
      }
      state.totalQuantity++;
      state.changed = true;
    },
    removeItemFromCart: (state, action) => {
      const idToRemove = action.payload;
      const existingItem = state.items.find((i) => i.id === idToRemove);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== idToRemove);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }

      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
