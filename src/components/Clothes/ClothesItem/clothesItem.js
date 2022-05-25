import { useContext } from 'react';

import ClothesItemForm from './clothesItemForm';
import classes from './clothesItem.module.css';
import CartContext from '../../../Hook/cart-context';

const ClothesItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.cloth}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img src={props.image} alt="/" />
        </div>
        <div className={classes.right}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div className={classes['item-form']}>
        <ClothesItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ClothesItem;
