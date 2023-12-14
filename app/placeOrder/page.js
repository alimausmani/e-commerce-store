import React from "react";
import Orders from "./order.js";
import Navbar from "./order.js";
import Footer from "../footer";
const Page = () => {
    return (
      <>
        <Navbar /> 
        <div className="orderdiv"style={{ height: '800px' }}></div>
        <Footer />       
      </>
    );
  };
  
  export default Page;