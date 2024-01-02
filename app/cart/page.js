// Cart.js
import React from "react";

const Cart = ({ cartItems }) => {
  const handleCheckout = () => {
    console.log("Checkout clicked");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems && cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>Category: {item.category}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
          <button className="buttonforcart" onClick={handleCheckout}>
            Checkout
          </button>
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
