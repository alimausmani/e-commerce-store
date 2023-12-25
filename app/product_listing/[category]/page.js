// Product.js
"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Product = ({ params }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const filteredProducts = products.filter((product) => product.category === params.category);

  const handleViewAll = (productId) => {
    // Modify the route to navigate to the Home page (product_details)
    router.push(`/product_details/${encodeURIComponent(productId)}`);
  };

  return (
    <div>
      {error && <p>{error}</p>}

      {loading && <p>Loading...</p>}

      {filteredProducts.length > 0 && (
        <div>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <h5>Name: {product.title}</h5>
              <h5>Category: {product.category}</h5>
              <h5>price: {product.price}</h5>
              <h5>stock: {product.stock}</h5>

              <img
                onClick={() => handleViewAll(product.id)}
                src={product.thumbnail}
                alt={product.title}
                style={{ maxWidth: '300px', cursor: 'pointer' }}
              />
              <div>
                <button className='Buy_now'>Buy now</button>
                <button className='Add_cart'>Add to Cart</button>
            </div>
            <hr />

            </div>
          ))}
        </div>
      )}
     

      {filteredProducts.length === 0 && !loading && <p>No matching products found.</p>}
    </div>
  );
};

export default Product;
