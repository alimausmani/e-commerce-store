// // src/components/ProductList.js
// import React, { useState, useEffect } from 'react';

// pages/all_categories/page.js
"use client";

import React, { useState, useEffect } from 'react';

// const All_categories = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch data from the "all_categories" file
//     fetch('/all_categories.json') // Adjust the path accordingly
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);

//   // Function to chunk the array into rows
//   const chunkArray = (array, size) => {
//     return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
//       array.slice(i * size, i * size + size)
//     );
//   };

//   return (
//     <div>
//       {chunkArray(products, 4).map((row, rowIndex) => (
//         <div key={rowIndex} className="product-row">
//           {row.map(product => (
//             <div key={product.id} className="product-card">
//               <h3>{product.name}</h3>
//               <p>Price: {product.price}</p>
//               {/* Add more elements based on your data */}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default All_categories;
