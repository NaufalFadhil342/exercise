import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal/modal';
import CartItem from './cartItem';
import classes from './cart.module.css';
import CartContext from '../../Hook/cart-context';
import Checkout from '../Cart/Checkout/checkout';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmited, setDidSubmited] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const confirmHandler = (userData) => {
    console.log({ user: userData, items: cartCtx.items });
    setDidSubmited(true);
    cartCtx.clearItem();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
      ))}
    </ul>
  );

  const cartButtonHandler = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={confirmHandler} onCancel={props.onClose} />}
      {!isCheckout && cartButtonHandler}
    </React.Fragment>
  );

  const didSubmitedModalContent = (
    <div>
      <p>Succesfully send the order!</p>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {!didSubmited && cartModalContent}
      {didSubmited && didSubmitedModalContent}
    </Modal>
  );
};

export default Cart;
