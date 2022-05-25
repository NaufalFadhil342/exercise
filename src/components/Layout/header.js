import { Fragment } from 'react';

import HeaderCartButton from './headerCartButton';
import shoppingImage from '../../Gambar/shoppingBanner.jpg';
import classes from './header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FashionShop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={shoppingImage} alt="Take Your Best Clothes" />
      </div>
    </Fragment>
  );
};

export default Header;
