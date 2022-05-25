import React, { useRef } from 'react';
import classes from './checkout.module.css';

const Checkout = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value || '';
    const enteredEmail = emailInputRef.current.value || '';
    const enteredPassword = passwordInputRef.current.value || '';

    const enteredValidName = enteredName;
    const enteredValidEmail = enteredEmail;
    const enteredValidPassword = enteredPassword;

    const formIsValid = enteredValidName && enteredValidEmail && enteredValidPassword;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    });
  };

  return (
    <form className={classes.checkout} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordInputRef} />
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel}>Cancel</button>
        <button className={classes.confirm}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
