"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './product_detail.css';
// import 'bootstrap/dist/css/bootstrap.css';

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

    const existingCartItems = Cookies.getJSON('cartItems') || [];
    setCartItems(existingCartItems);
  }, []);

  const addToCart = (product) => {
    try {
      const existingCartItems = Cookies.getJSON('cartItems') || [];
      const existingCartItem = existingCartItems.find((item) => item.id === product.id);
  
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        existingCartItems.push({ ...product, quantity: 1 });
      }
  
      setCartItems(existingCartItems);
      Cookies.set('cartItems', JSON.stringify(existingCartItems));
  
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };  

  const filteredProducts = products.filter((product) => product.id.toString() === params.pid)

  return (
    <div >
        {filteredProducts.length > 0 ? (
          <div>
            {filteredProducts.map((product) => (
              <div className="product container" key={product.id}>
                <div className='img_container'>
                  <img src={product.thumbnail} className='product_image' style={{width:'100%',height:'100%', marginTop: '0', marginRight: '30px' }}/>
                </div>
                <div className='product_container'>
                  <div className='category'>{product.category}</div>
                  <div className='title'>{product.title}</div>
                  <div className='discription'>{product.description}</div>
                  <div className='rs'>Rs ${product.price}</div>
                  <button className='Add_cart' onClick={() => addToCart(product)}>Add to Cart<img id="img" src="/cart_go.png"/></button>
                </div>
              </div>
            ))}
          </div>
        ) : (
            <p>No product found with ID {params.pid}</p>
        )}
        <hr />
    </div>
  );
};

export default Product;
