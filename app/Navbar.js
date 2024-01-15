import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  return (
    <>
    <div className='container'style={{border:'solid red 2px'}}>
        <img className="d-lg-none d-sm-block menu" src="menu.png"></img>
        <img className="cart d-lg-none d-sm-block " src="Cart.png"></img><div className="d-none d-lg-block Cart font">My cart</div>
        <a href='/'><img className="E_icon icon" src="Frame 49.png"></img></a>
        <img className="cart d-none d-lg-block" src="Cart.png"></img>
      <div className='header_1 d-none d-lg-block'>
        <a className="Smartphones font" href="/product_listing/smartphones">Smartphones<img src="Icon/Dropdown.png"/></a>
        <div className="Laptops font">Laptops<img src="Icon/Dropdown.png"/></div>
        <div className="Home_decor font">Home decor<img src="Icon/Dropdown.png"/></div>
        <div className="More font">More<img src="Icon/Dropdown.png"/></div>
      </div>
      <div className="header_2 d-none d-lg-block">
        <div className="Search_bar font"><img src="Icon/Search.png"/></div>  
      </div>
    </div>
    </>
  );
};
export default Navbar;
