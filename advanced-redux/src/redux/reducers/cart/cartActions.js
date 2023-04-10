import { UIActions } from '../UISlice';
import { cartActions } from './cartSlice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-dummy-backend-bc797-default-rtdb.firebaseio.com/cart.json',
      );

      if (!response.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          ...cartData,
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
      const { items, totalQuantity } = cart;
      const response = await fetch(
        'https://react-dummy-backend-bc797-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({ items, totalQuantity }),
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
