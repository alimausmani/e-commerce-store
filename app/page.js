// Home.js
"use client";
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Image from "./image_slider";
import "./globals.css";
import Footer from "./footer";
import ProductList from './product_listing/page';
import { useRouter } from 'next/navigation'; 

const Home = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products');

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      setError('Error fetching data. Please try again later.');
      // setLoading(false);
      return;
    }

    const data = await response.json();

    console.log('Received data:', data);

    const productsArray = data.products || [];

    if (!Array.isArray(productsArray)) {
      console.error('Invalid data format. Expected an array.');
      // setError('Error fetching data. Please try again later.');
      // setLoading(false);
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

    const limitedProducts = Object.values(categoryProducts).flatMap(products => products.slice(0, 4));

    setProducts(limitedProducts);
    // setLoading(false);
  };

  const handleViewAll = (category, productId) => {
    let destination;

    if (productId) {
        destination = `/product_details/${(productId)}`;
    } else {
        destination = `/product_listing/${(category)}`;
    }

    router.push(destination);
};


  return (
    <div>
      <Image />
      {/* {error && <p>{error}</p>}

      {loading && <p>Loading...</p>}

      {!loading && ( */}
        <div>
          {Array.from(new Set(products.map((product) => product.category))).map((category) => (
            <div key={category}>
              <h2 className='category'>{category}</h2>
              <button onClick={() => handleViewAll(category)} className='view_all'>View All</button>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="container-fluid"> 
                    <div key={product.id} className="col-sm-6 col-lg-3" style={{float:'left',marginBottom: '20px'}}>
                      <img
                          onClick={() => handleViewAll(category, product.id)}  
                          src={product.thumbnail}
                          alt={product.title}
                          style={{ maxHeight: '200px', cursor: 'pointer',marginTop:'10px',marginBottom:'10px' }}
                      />
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
      {/* )} */}
      <Footer />
    </div>
  );
};
export default Home;
