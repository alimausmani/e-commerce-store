"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Navbar from "./Navbar";
import Image from "./image_slider";
import Product from "./all_products";
import "./globals.css";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Image />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Footer />
    </>
  );
};

export default Home;
