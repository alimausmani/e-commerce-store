"use client";
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Image from "./image_slider";
import "./globals.css";
import Footer from "./footer";
import ProductList from './product_listing/page';
import { useRouter } from 'next/navigation'; 

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products');

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return;
    }

    const data = await response.json();
    const productsArray = data.products || [];

    if (!Array.isArray(productsArray)) {
      console.error('Invalid data format. Expected an array.');
      return;
    }

    const categoryProducts = {};
    productsArray.forEach(product => {
      if (!categoryProducts[product.category]) {
        categoryProducts[product.category] = [product];
      } else {
        categoryProducts[product.category].push(product);
      }
    });
    const limitedProducts = Object.values(categoryProducts).map(products => products.slice(0, 4)).flat();

    setProducts(limitedProducts);
    };

  return (
    <div>
      <Image />
        <div>
          {Array.from(new Set(products.map((product) => product.category))).map((category) => (
            <div key={category}>
              <h2 className='category'>{category}</h2>
              <button className='view_all'>
                <a href={`/product_listing/${category}`}>View All</a>
              </button>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="container-fluid"> 
                    <div key={product.id} className="col-sm-6 col-lg-3" style={{float:'left',marginBottom: '20px'}}>
                    <a href={`/product_details/${product.id}`}><img src={product.thumbnail} alt={product.title} style={{ maxHeight: '200px', cursor: 'pointer',marginTop:'10px',marginBottom:'10px' }}/></a>
                      <h5>Name: {product.title}</h5>
                      <h5>Category: {product.category}</h5>
                      <h5>price: {product.price}</h5>
                      <h5>stock: {product.stock}</h5>
                    </div>
                  </div>
                ))}
              <br></br>
            </div>
          ))}
        </div>
      <Footer />
    </div>
  );
};
export default Home;
