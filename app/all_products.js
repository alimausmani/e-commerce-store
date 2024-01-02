// import React from 'react';
// const Product = () => {
//     return (
//       <>
//         <div id='product'>
//           {/* <div className="bttn"><button>View All</button></div> */}

//           <div className='col' id='col1'></div>
//           <div className='col' id='col2'></div>
//           <div className='col' id='col3'></div>
//           <div className='col' id='col4'></div>
//         </div>
//       </>
//     );
//   };

//   export default Product;




// "khushboo's code"
// "use client";

// import React, { useEffect, useState } from "react";

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);

//   const callApi = async () => {
//     try {
//       const response = await fetch('https://serverside-five.vercel.app/product');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     callApi();
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       {Array.isArray(products) &&
//         products.map((product) => (
//           <div className="col" id='col1'    key={product.id}>
        
//             <h2>{product.name}</h2>
//             <p>{product.reviews}</p>
//             <p>{product.price}</p>
//             <img src={product.img[0]} alt={product.name} />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default AllProducts;






































// // Product.js
// import React, { useState, useEffect } from 'react';

// const Product = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products/category/smartphones');
//         const data = await response.json();
//         setProducts(data); // assuming data is an array of products
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // empty dependency array ensures the effect runs only once on component mount

//   return (
//     <>
//       <div id='Product'>
//         {products && Product.map((Product, index) => (
//           <div className='col' key={index}>
//             <h2>{Product.name}</h2>
//             <p>{Product.description}</p>
//             {/* Add more fields based on your data structure */}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Product;
