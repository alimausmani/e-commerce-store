"use client";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const existingCartItems = Cookies.getJSON('cartItems') || [];
    setCartItems(existingCartItems);
  }, []);

  useEffect(() => {
    const handleCartChange = () => {
      const updatedCartItems = Cookies.getJSON('cartItems') || [];
      setCartItems(updatedCartItems);
    };

    window.addEventListener('storage', handleCartChange);
    return () => {
      window.removeEventListener('storage', handleCartChange);
    };
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    Cookies.set('cartItems', updatedCartItems);
  };

  return (
    <div style={{ margin: 'auto', width: '1200px' }}>
      <h2>Shopping Cart</h2>
      <hr />

      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.thumbnail} alt={item.title} style={{ width: '50px', height: '50px' }} />
                <div>
                  <strong>{item.title}</strong>
                  <br />
                  Quantity: {item.quantity}
                  <br />
                  Price: ${item.price * item.quantity}
                  <br />
                  <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>

          <p>Total Price: ${calculateTotalPrice()}</p>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
