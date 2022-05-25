import { useState } from 'react';

import Header from './Components/Layout/header';
import Clothes from './Components/Clothes/clothes';
import Cart from './Components/Cart/cart';
import CartProvider from './Hook/cartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Clothes />
      </main>
    </CartProvider>
  );
}

export default App;
