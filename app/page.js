// Home.js
"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "./image_slider";
import Product from "./all_products";
import Page from "./product_listing/page";
import Footer from "./footer";
// import All_categories  from "./all_categories";
import "./globals.css";


const Home = () => {
  return (
    <>
      <Image />
      <Product />
      <Page />
      <Footer />
      {/* <All_categories /> */}
    </>
  );
};

export default Home;

