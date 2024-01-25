// Cart.js
"use client";
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './cart.css';
import Footer from '../footer';


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
    let totalPrice = 0;
  
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  
  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    Cookies.set('cartItems', updatedCartItems);
  };


  return (
    <>
      <div className="container cart_page">
        <div className='cart_detail'>MY CART</div>
        <div className='cart_detail add_cartdetail'>All the products you added to purchase appears here</div>
      </div>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <ul key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div className='container products'>
                  <div className='image'>
                    <img src={item.thumbnail} alt={item.title} style={{ height: '199px', }} />
                  </div>
                  <div className='title'>{item.title}</div>
                  <div className='price'>Rs: ${item.price}</div>
                  <div className='quantity'>Quantity: {item.quantity}</div>
                  <div className="delete" onClick={() => handleDeleteItem(item.id)}>REMOVE</div>
                </div>
              </ul>
            ))}
          </ul>
            <div className='price_container'>
              <div className='price'>Total Rs: ${calculateTotalPrice()}</div>
              <a href="/form"><button className="place-order">Proceed to Buy<img id="img" src="cart_go.png" /></button></a>
            </div>
        </div>
      ) : (
        <h3 style={{textAlign:'center',marginTop:'40px'}}>Your cart is empty.</h3>
      )}
    </>
  );
};
export default Cart;
