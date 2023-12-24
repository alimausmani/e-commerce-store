// Home.js
"use client";
import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Image from "./image_slider";
import "./globals.css";
import Footer from "./footer";
import ProductList from './product_listing/page';
import { useRouter } from 'next/navigation';  // Correct import statement

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

  const handleViewAll = (category, productId) => {
    // If productId is provided, navigate to product_details, otherwise navigate to product_listing
    const destination = productId ? `/product_details/${encodeURIComponent(productId)}` : `/product_listing/${encodeURIComponent(category)}`;
    router.push(destination);
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
                <div key={product.id} className="row"> {/* Use Bootstrap column class to set width */}
                <div key={product.id} className="col-lg-4" style={{float:'left'}}>

                    <h5>Name: {product.title}</h5>
                    <h5>Category: {product.category}</h5>
                    <h5>price: {product.price}</h5>
                    <h5>stock: {product.stock}</h5>

                    <img
                      onClick={() => handleViewAll(category, product.id)}  // Pass both category and product id
                      src={product.thumbnail}
                      alt={product.title}
                      style={{ maxWidth: '100px', cursor: 'pointer' }}
                    />
                    <hr />
                  </div>
                </div>
                ))}
              <button onClick={() => handleViewAll(category)} className='view_all'>View All</button>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
