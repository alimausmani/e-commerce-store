// Product.js
"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Product = ({ params }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Update cartItems state initially
    const existingCartItems = Cookies.getJSON('cartItems') || [];
    setCartItems(existingCartItems);
  }, []);

  const addToCart = (product) => {
    try {
      const existingCartItems = Cookies.getJSON('cartItems') || [];
      const existingCartItemIndex = existingCartItems.findIndex((item) => item.id === product.id);

      if (existingCartItemIndex !== -1) {
        // If the product is already in the cart, update its quantity
        const updatedCartItems = [...existingCartItems];
        updatedCartItems[existingCartItemIndex].quantity += 1;

<<<<<<< HEAD
  const handleAddToCart = () => {
    // Perform add-to-cart logic here
    const selectedProduct = filteredProducts[0];
  
    // Update the state with the new item
    setCartItems((prevItems) => [...prevItems, selectedProduct]);
  
    // After updating the state, navigate to the /cart page
    router.push('/cart',
      undefined,
      { shallow: true });
=======
        setCartItems(updatedCartItems);
        Cookies.set('cartItems', JSON.stringify(updatedCartItems));
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        const updatedCartItems = [...existingCartItems, { ...product, quantity: 1 }];
        setCartItems(updatedCartItems);
        Cookies.set('cartItems', JSON.stringify(updatedCartItems));
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
>>>>>>> ad143f513d0beade387e9d971cde12f214d0bb8c
  };

  const filteredProducts = products.filter((product) => product.id.toString() === params.pid);

  return (
    <div style={{ margin: 'auto', width: '1200px' }}>
      {filteredProducts.length > 0 && (
        <div>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ maxWidth: '350px', marginTop: '25px', marginBottom: '15px' }}
              />
              <h5>Name: {product.title}</h5>
              <h5>Category: {product.category}</h5>
              <h5>Price: ${product.price}</h5>
              <h5>Stock: {product.stock}</h5>
              <h5>Description: {product.description}</h5>
              <button className='Add_to_cart' onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <hr />
    </div>
  );
};

export default Product;
