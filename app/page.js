"use client"
import React from 'react';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar';
const Home = () => {
  return (
    <>  
    <Navbar/>    
=======
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
    
>>>>>>> cbd4fc58badb2f42ca78a5eb3b4af10b61d30a7f
    </>
  );
};

export default Home;