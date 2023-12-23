// home.js
"use client"
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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log('Received data:', data);

      const productsArray = data.products || [];

      if (!Array.isArray(productsArray)) {
        throw new Error('Invalid data format. Expected an array.');
      }

      const categoryProducts = {};

      productsArray.forEach(product => {
        if (!categoryProducts[product.category]) {
          categoryProducts[product.category] = [product];
        } else {
          categoryProducts[product.category].push(product);
        }
      });

      const limitedProducts = Object.values(categoryProducts).flatMap(products => products.slice(0, 3));

      setProducts(limitedProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Error fetching data. Please try again later.');
      setLoading(false);
    }
  };

  const handleViewAll = (category) => {
    router.push(`api/product_listing/${encodeURIComponent(category)}`);
  };

  return (
    <div>

      <Image />
      {error && <p>{error}</p>}

      {loading && <p>Loading...</p>}

      {!loading && (
        <div>
          {Array.from(new Set(products.map((product) => product.category))).map((category) => (
            <div key={category}>
              <h2>{category}</h2>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id}>
                    <p>Name: {product.title}</p>
                    <p>Category: {product.category}</p>
                    <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '150px' }} />

                    <hr />
                  </div>
                ))}
              <button onClick={() => handleViewAll(category)}>View All</button>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
