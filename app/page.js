"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Image from './image_slider';
import Product from './all_products';
import './globals.css';


const Home = () => {
  return (
    <>
     
    <Navbar/>
    <Image/>
    <Product/>
    
    </>
  );
};

export default Home;