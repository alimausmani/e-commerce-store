// Import necessary modules
"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Product component
const Product = ({ params }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
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

        setProducts(productsArray);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => product.id.toString() === params.pid);

  const handleAddToCart = () => {
    // Perform add-to-cart logic here
    const selectedProduct = filteredProducts[0];
  
    // Update the state with the new item
    setCartItems((prevItems) => [...prevItems, selectedProduct]);
  
    // After updating the state, navigate to the /cart page
    router.push('/cart',
      undefined,
      { shallow: true });
  };
  

  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {filteredProducts.length > 0 && (
        <div>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '350px', marginTop: '25px', marginBottom: '15px' }} />
              <h5>Name: {product.title}</h5>
              <h5>Category: {product.category}</h5>
              <h5>price: {product.price}</h5>
              <h5>stock: {product.stock}</h5>
              <h5>description:{product.description}</h5>
            </div>
          ))}
        </div>
      )}
      <div>
        <button className='Buy_now'>Buy now</button>
        <button className='Add_cart' onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <hr />
    </div>
  );
};

export default Product;
