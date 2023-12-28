// Product.js

"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Product = ({ params }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState(null); // Use null to indicate no initial sorting
  const [selectedBrand, setSelectedBrand] = useState('');
  const [availableBrands, setAvailableBrands] = useState([]);

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

  useEffect(() => {
    const categoryProducts = products.filter((product) => product.category === params.category);
    const uniqueBrands = Array.from(new Set(categoryProducts.map((product) => product.brand)));
    setAvailableBrands(uniqueBrands);
  }, [params.category, products]);

  const filteredProducts = products.filter(
    (product) =>
      product.category === params.category &&
      (selectedBrand === '' || product.brand === selectedBrand)
  );

  const handleSort = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    } else {
      return 0; // No sorting
    }
  });

  const handleViewAll = (productId) => {
    router.push(`/product_details/${productId}`);
  };

  return (
    <div>
      {/* Add buttons to trigger sorting */}
      <div className='' style={{height:'70px',width:'100%'}}> <h5 style={{fontSize:'25px'}}><b>All Products</b></h5><h6>Showing 1-20 out of 10000 products</h6>
        <button onClick={() => handleSort('desc')} className='high'>High to Low</button>
        <button onClick={() => handleSort('asc')} className='low'>Low to High</button>
      </div>

      {/* Add dropdown or buttons for brand filtering */}
      <div  style={{border:'solid 2px black',height:'350px',width:'400px',float:'left', marginRight: '30px',padding: '20px'}}> <h5> FILTERS </h5><h6>1000+Products</h6><hr />
        <label style={{fontSize:'20px'}}>
          Filter by Brand:
          <select value={selectedBrand} onChange={(e) => handleBrandFilter(e.target.value)}>
            <option value="" className='brands'>All Brands</option>
            {availableBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>
      </div>

      {error && <p>{error}</p>}

      {loading && <p>Loading...</p>}

      {sortedProducts.length > 0 && (
        <div style={{float:'left',width:'500px'}}>
          {sortedProducts.map((product) => (
            <div key={product.id}>
              <img
                onClick={() => handleViewAll(product.id)}
                src={product.thumbnail}
                alt={product.title}
                style={{ maxWidth: '300px', cursor: 'pointer',marginRight:'20px' }}
              />
              <h5>Name: {product.title}</h5>
              <h5>Category: {product.category}</h5>
              <h5>Price: {product.price}</h5>
              <h5>Stock: {product.stock}</h5>
              <h5>Brand: {product.brand}</h5>

              <div>
                <button className='Buy_now'>Buy now</button>
                <button className='Add_cart'>Add to Cart</button>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}

      {sortedProducts.length === 0 && !loading && <p>No matching products found.</p>}
    </div>
  );
};

export default Product;
