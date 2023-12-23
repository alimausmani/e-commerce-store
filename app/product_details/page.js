// ProductDetail.js
import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.title}</p>
      <p>Category: {product.category}</p>
      <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '100px' }} />
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;

