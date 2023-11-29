
// pages/all_categories/page.js
"use client";

import React, { useState, useEffect } from 'react';

const AllCategories = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://serverside-five.vercel.app/product');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list-container">
        {Array.isArray(products) && products.map((product) => (
          <div key={product._id} className="product-item">
            <img src={product.img[0]} alt={`${product.name}'s image`} className="product-image" />
            <div className="product-details">
              <strong>{product.name}</strong>
              <strong><p>Price: {product.price}</p></strong>
              {/* You can add more details here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
