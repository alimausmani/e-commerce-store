"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "./image_slider";
import "./globals.css";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import Cart from "./cart/page.js";

<<<<<<< HEAD
const Home = ({ updateCartItems }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
=======
const Home = () => {
  const [products, setProducts] = useState([]);
>>>>>>> ad143f513d0beade387e9d971cde12f214d0bb8c

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
<<<<<<< HEAD
    try {
      const response = await fetch("https://dummyjson.com/products");
=======
    const response = await fetch('https://dummyjson.com/products');
>>>>>>> ad143f513d0beade387e9d971cde12f214d0bb8c

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return;
    }

<<<<<<< HEAD
      console.log("Received data:", data);
=======
    const data = await response.json();
    const productsArray = data.products || [];
>>>>>>> ad143f513d0beade387e9d971cde12f214d0bb8c

    if (!Array.isArray(productsArray)) {
      console.error('Invalid data format. Expected an array.');
      return;
    }

<<<<<<< HEAD
      if (!Array.isArray(productsArray)) {
        throw new Error("Invalid data format. Expected an array.");
=======
    const categoryProducts = {};
    productsArray.forEach(product => {
      if (!categoryProducts[product.category]) {
        categoryProducts[product.category] = [product];
      } else {
        categoryProducts[product.category].push(product);
>>>>>>> ad143f513d0beade387e9d971cde12f214d0bb8c
      }
    });
    const limitedProducts = Object.values(categoryProducts).map(products => products.slice(0, 4)).flat();

<<<<<<< HEAD
      const categoryProducts = {};

      productsArray.forEach((product) => {
        if (!categoryProducts[product.category]) {
          categoryProducts[product.category] = [product];
        } else {
          categoryProducts[product.category].push(product);
        }
      });

      const limitedProducts = Object.values(categoryProducts).flatMap(
        (products) => products.slice(0, 4)
      );

      setProducts(limitedProducts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError("Error fetching data. Please try again later.");
      setLoading(false);
    }
  };

  const handleViewAll = (category, productId) => {
    const destination = productId
      ? `/product_details/${encodeURIComponent(productId)}`
      : `/product_listing/${encodeURIComponent(category)}`;
    router.push(destination);
  };
=======
    setProducts(limitedProducts);
    };
>>>>>>> ad143f513d0beade387e9d971cde12f214d0bb8c

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    // console.log("existingProduct", existingProduct);
    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  return (
    <div>
      <Image />
<<<<<<< HEAD
      {error && <p>{error}</p>}

      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          {Array.from(new Set(products.map((product) => product.category))).map(
            (category) => (
              <div key={category}>
                <h2 className="category">{category}</h2>
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <div key={product.id} className="container-fluid">
                      <div
                        key={product.id}
                        className="col-sm-6 col-lg-3"
                        style={{ float: "left", marginBottom: "20px" }}
                      >
                        <img
                          onClick={() => handleViewAll(category, product.id)}
                          src={product.thumbnail}
                          alt={product.title}
                          style={{
                            maxHeight: "200px",
                            cursor: "pointer",
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        />
                        <h5>Name: {product.title}</h5>
                        <h5>Category: {product.category}</h5>
                        <h5>Price: {product.price}</h5>
                        <h5>Stock: {product.stock}</h5>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="add_to_cart">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                <button
                  onClick={() => handleViewAll(category)}
                  className="view_all"
                >
                  View All
                </button>
                <br></br>
              </div>
            )
          )}
        </div>
      )}
      {/* Pass cartItems to the Cart component */}
      <Cart cartItems={cartItems} />
=======
        <div>
          {Array.from(new Set(products.map((product) => product.category))).map((category) => (
            <div key={category}>
              <h2 className='category'>{category}</h2>
              <button className='view_all'>
                <a href={`/product_listing/${category}`}>View All</a>
              </button>
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="container-fluid"> 
                    <div key={product.id} className="col-sm-6 col-lg-3" style={{float:'left',marginBottom: '20px'}}>
                    <a href={`/product_details/${product.id}`}><img src={product.thumbnail} alt={product.title} style={{ maxHeight: '200px', cursor: 'pointer',marginTop:'10px',marginBottom:'10px' }}/></a>
                      <h5>Name: {product.title}</h5>
                      <h5>Category: {product.category}</h5>
                      <h5>price: {product.price}</h5>
                      <h5>stock: {product.stock}</h5>
                    </div>
                  </div>
                ))}
              <br></br>
            </div>
          ))}
        </div>
>>>>>>> ad143f513d0beade387e9d971cde12f214d0bb8c
      <Footer />
    </div>
  );
};
export default Home;

