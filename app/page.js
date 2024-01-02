// Home.js
"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "./image_slider";
import "./globals.css";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import Cart from "./cart/page.js";

const Home = ({ updateCartItems }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Received data:", data);

      const productsArray = data.products || [];

      if (!Array.isArray(productsArray)) {
        throw new Error("Invalid data format. Expected an array.");
      }

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
      <Footer />
    </div>
  );
};

export default Home;

