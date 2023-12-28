// Cart.js
"use client";
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems?.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} style={{ maxWidth: '50px' }} />
              <p>{item.title}</p>
              <p>Price: {item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
