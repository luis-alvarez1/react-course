import React from 'react';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { UIActions } from '../../redux/reducers/UISlice';

const CartButton = (props) => {
  const totalItems = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(UIActions.toggleCartVisible());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      {totalItems > 0 && <span className={classes.badge}>{totalItems}</span>}
    </button>
  );
};

export default CartButton;
