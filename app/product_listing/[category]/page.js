// Import statements
"use client"
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './product_list.css';

const Product = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [availableBrands, setAvailableBrands] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [minRating, setMinRating] = useState('');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const priceRanges = [
    { label: 'Up to 200', maxPrice: 200 },
    { label: 'Up to 500', maxPrice: 500 },
    { label: 'Up to 700', maxPrice: 700 },
    { label: 'Up to 1000', maxPrice: 1000 },
    { label: 'Up to 1250', maxPrice: 1250 }
  ];

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

    const existingCartItems = Cookies.getJSON('cartItems') || [];
    setCartItems(existingCartItems);
  }, []);

  useEffect(() => {
    const categoryProducts = products.filter((product) => product.category === params.category);
    const uniqueBrands = Array.from(new Set(categoryProducts.map((product) => product.brand)));
    setAvailableBrands(uniqueBrands);
  }, [params.category, products]);

  const filteredProducts = products.filter(
    (product) =>
      product.category === params.category &&
      (selectedBrand === '' || product.brand === selectedBrand) &&
      (minRating === '' || product.rating >= parseFloat(minRating)) &&
      (selectedPriceRanges.length === 0 || selectedPriceRanges.some((price) => product.price <= price))
  );

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handlePriceFilter = (maxPrice, checked) => {
    if (checked) {
      setSelectedPriceRanges([...selectedPriceRanges, maxPrice]);
    } else {
      setSelectedPriceRanges(selectedPriceRanges.filter((price) => price !== maxPrice));
    }
  };

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
  };

  const handleAddToCart = (product) => {
    try {
      const existingCartItems = Cookies.getJSON('cartItems') || [];
      const existingCartItemIndex = existingCartItems.findIndex((item) => item.id === product.id);

      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...existingCartItems];
        updatedCartItems[existingCartItemIndex].quantity += 1;

        setCartItems(updatedCartItems);
        Cookies.set('cartItems', JSON.stringify(updatedCartItems));
      } else {
        const updatedCartItems = [...existingCartItems, { ...product, quantity: 1 }];
        setCartItems(updatedCartItems);
        Cookies.set('cartItems', JSON.stringify(updatedCartItems));
      }

      alert(`${product.title} has been added to the cart!`);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === 'desc') {
      return b.title.localeCompare(a.title);
    } else {
      return 0;
    }
  });

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="h1">CATEGORY / PRODUCT NAME </div>
        <div className="para">Crafted Elegance: Artisanal Wooden Furniture</div>
      </div>

      <div id="body" className="container-fluid">
        <div className="row">
          <div id="sidebar" className="d-none d-sm-block">
            <div id="sideheader" className="row">
              <div id="filtertext" className="col">
                filter
              </div>
              <div id="clear" className="col">
                CLEAR
              </div>
            </div>

            <div id="brand" className="row">
              <p className="brandtextpara">Select Brand</p>
              {availableBrands.map((brand) => (
                <label key={brand} className="brandtext">
                  <input className="chack"
                    type="checkbox"
                    value={brand}
                    checked={selectedBrand.includes(brand)}
                    onChange={(e) => handleBrandFilter(brand, e.target.checked)}
                  />
                  {brand}
                </label>
              ))}
            </div>

            <div id="rating" className="row">
              <p className="ratingpara">Select Brand</p>
            </div>

            <div id="priceRanges" className="row">
              <p className="pricerangepara">Select Price Range</p>
              {priceRanges.map((range) => (
                <label key={range.label} className="brandtext">
                  <input
                    type="checkbox"
                    value={range.maxPrice}
                    checked={selectedPriceRanges.includes(range.maxPrice)}
                    onChange={(e) => handlePriceFilter(range.maxPrice, e.target.checked)}
                  />
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          <div id="maindiv" className="col">
            <div id="filterbar" >
              <div className="d-flex">
                <div id="filter" className="d-none d-sm-block">
                  filters: not selected
                </div>
                <div>
                  <div id="dropdown" className="sm-col-12">this is a shorting div 
                    {/* <button onClick={() => handleSort('asc')} className="low">
                      A to Z
                    </button>
                    <button onClick={() => handleSort('desc')} className="high">
                      Z to A
                    </button> */}
                  </div>
                </div>
              </div>
              {sortedProducts.length > 0 && (
                <div id="imagrow" className="sm-col-12 row">
                  {sortedProducts.map((product, index) => (
                    <div className="imagebox" key={product.id}>
                      <a id={`image_${index}`} href={`/product_details/${product.id}`}>
                        <img src={product.thumbnail} alt={product.title} />
                      </a>
                      <h5>Name: {product.title}</h5>
                      <h5>Price: {product.price}</h5>
                      <h5>Rating: {product.rating}</h5>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;