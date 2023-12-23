// export default function Product({ params }) {
//     return (
//     <h1>Product id: {params.pid}</h1>

//     );
//   }


"use client";

    
import React, { useEffect, useState } from 'react';

const Product = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
          throw new Error('HTTP error! Status: ${response.status}');
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
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const filteredProducts = products.filter((product) => product.id.toString() === params.pid);

  return (
    <div>
      {error && <p>{error}</p>}

      {loading && <p>Loading...</p>}

      {filteredProducts.length > 0 && (
        <div>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <p>Name: {product.title}</p>
              <p>Category: {product.category}</p>
              <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '100px' }} />
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