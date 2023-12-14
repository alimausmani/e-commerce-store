import React from 'react';
import Navbar from '../Navbar';
import Footer from '../footer';
const CartNavbar = () => {
  return (
    <>
      <Navbar />
      <h1>This is Your cart</h1>
      <p>Cart Page</p>
      <div className="cartdiv"style={{ height: '800px' }}></div>
      <Footer />


    </>
  );
};

export default CartNavbar;