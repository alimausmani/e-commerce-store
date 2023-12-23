"use client"
import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');

      if (!response.ok) {
        throw new Error("HTTP error! Status: ${response.status}");
      }

      const data = await response.json();

      console.log('Received data:', data);

      const productsArray = data.products || [];

      if (!Array.isArray(productsArray)) {
        throw new Error('Invalid data format. Expected an array.');
      }

      setProducts(productsArray);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Error fetching data. Please try again later.');
      setLoading(false);
    }
  };

  const handleViewAll = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryProducts = (category) => {
    const categoryProducts = products
      .filter((product) => product.category === category)
      .slice(0, 3); // Display the first 3 products initially

    return (
      <div key={category}>
        <h2>{category}</h2>
        {categoryProducts.map((product) => (
          <div key={product.id}>
            <p>Name: {product.title}</p>
            <p>Category: {product.category}</p>
            <hr />
          </div>
        ))}
        <button onClick={() => handleViewAll(category)}>View All</button>
      </div>
    );
  };

  return (
    <div>
      {error && <p>{error}</p>}

      {loading && <p>Loading...</p>}

      {!loading && !selectedCategory && (
        <div>
          {Array.from(new Set(products.map((product) => product.category))).map((category) => (
            renderCategoryProducts(category)
          ))}
        </div>
      )}

      {selectedCategory && (
        <div>
          <h2>Selected Category: {selectedCategory}</h2>
          {products
            .filter((product) => product.category === selectedCategory)
            .map((filteredProduct) => (
              <div key={filteredProduct.id}>
                <p>Name: {filteredProduct.title}</p>
                <p>Category: {filteredProduct.category}</p>
                <img src={filteredProduct.thumbnail} alt={filteredProduct.title} style={{ maxWidth: '100px' }} />
                <hr />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;