import React from 'react';
import Customers from './components/Customers/Customers';
import AdOptions from './components/AdOptions/AdOptions';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import CheckoutBar from './components/CheckoutBar/CheckoutBar';

export default () => {
  return (
    <div>
      <h2>Seek Store</h2>
      <Customers />
      <AdOptions />
      <ShoppingCart />
      <CheckoutBar />
    </div>
  )
}