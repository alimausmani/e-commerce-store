// Cart.js
"use client";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

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

  const handlePlaceOrder = () => {
    alert("Order Placed!");
  };

  return (
    <div style={{ margin: 'auto', width: '80%', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2>Cart Items</h2>
      <hr />

      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <ul key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img src={item.thumbnail} alt={item.title} style={{ width:'300px', marginRight: '20px' }} />
                <div>
                  <strong>{item.title}</strong>
                  <br/><br/>
                  <h5>Quantity: {item.quantity}</h5>
                  <h5>Price: ${item.price}</h5>
                  <h5>Stock: {item.stock}</h5>
                  <button className="delete" onClick={() => handleDeleteItem(item.id)}>Remove item</button>
                </div>
              </ul>
            ))}
          </ul>
          <hr />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p>Total Price: ${calculateTotalPrice()}</p>
            <button className="place-order" onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
