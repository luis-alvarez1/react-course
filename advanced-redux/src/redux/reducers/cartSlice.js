import { createSlice } from '@reduxjs/toolkit';
import { UIActions } from './UISlice';

const initialState = { items: [], totalQuantity: 0 };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UIActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending cart data',
      }),
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-dummy-backend-bc797-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        },
      );

      if (!response.ok) {
        throw new Error('updating failed');
      }
    };

    try {
      await sendRequest();
      dispatch(
        UIActions.showNotification({
          status: 'success',
          title: 'Done!',
          message: 'Data sent successfully',
        }),
      );
    } catch (error) {
      dispatch(
        UIActions.showNotification({
          status: 'error',
          title: 'Failed',
          message: 'Data did not sent',
        }),
      );
    }
  };
};

export const cartActions = cartSlice.actions;
