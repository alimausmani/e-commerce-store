"use client";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './product_list.css';

const Product = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [minRating, setMinRating] = useState('');
  const [availableBrands, setAvailableBrands] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/products');

      if (response.ok) {
        const data = await response.json();
        const productsArray = data.products || [];

        if (Array.isArray(productsArray)) {
          setProducts(productsArray);
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    };

    fetchData();

    const existingCartItems = Cookies.getJSON('cartItems') || [];
    setCartItems(existingCartItems);
    console.log(existingCartItems)
  }, []);

  useEffect(() => {
    const categoryProducts = products.filter((product) => product.category === params.category);
    const uniqueBrands = Array.from(new Set(categoryProducts.map((product) => product.brand)));
    setAvailableBrands(uniqueBrands);
  }, [params.category, products]);

  const filteredProducts = products.filter(
    (product) =>
      product.category === params.category &&
      (minRating === '' || product.rating >= parseFloat(minRating))
  );

  const handleSort = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <div style={{ height: '70px', width: '100%' }}>
        <h5 style={{ fontSize: '25px' }}>
          <b>All Products</b>
        </h5>
        <h6>Showing 1-20 out of 10000 products</h6>
        <button onClick={() => handleSort('desc')} className='high'>
          High to Low
        </button>
        <button onClick={() => handleSort('asc')} className='low'>
          Low to High
        </button>
      </div>

      <div className="filter">
        <h5> FILTERS </h5>
        <h6>1000+Products</h6>
        <hr />
        <label style={{ fontSize: '20px' }}>
          Filter by Rating:
          <input type="number" placeholder="Min Rating" value={minRating} onChange={(e) => setMinRating(e.target.value)} />
        </label>
      </div>
      {sortedProducts.length > 0 && (
        <div style={{ float: 'left', width: '500px' }}>
          {sortedProducts.map((product) => (
            <div key={product.id} style={{ marginBottom: '20px' }}>
              <a href={`/product_details/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '300px', cursor: 'pointer', marginRight: '20px' }} />
              </a>
              <h5>Name: {product.title}</h5>
              <h5>Category: {product.category}</h5>
              <h5>Price: {product.price}</h5>
              <h5>Stock: {product.stock}</h5>
              <h5>Brand: {product.brand}</h5>
              <h5>Rating: {product.rating}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;























