// pages/cart.js
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const router = useRouter();
  const { cartItems } = router.query || {};

  // Ensure cartItems is a string before attempting to use startsWith
  const cartItemsString = typeof cartItems === 'string' ? cartItems : '';

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItemsString &&
          JSON.parse(cartItemsString).map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>Category: {item.category}</p>
              <p>Price: {item.price}</p>
              {/* Add other product details as needed */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cart;
