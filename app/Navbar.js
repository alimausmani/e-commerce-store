import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  return (
    <>
      <div className='container'>
        <img className="d-lg-none d-sm-block menu" src="menu.png"></img>
        <img className="cart d-lg-none d-sm-block " src="/Cart.png"></img><a href="/cart"><div className="d-none d-lg-block Cart font">My cart</div></a>
        <a href='/'><img className="E_icon icon" src="/logo.png"></img></a>
        <img className="cart d-none d-lg-block" src="/Cart.png"></img>

        <div className='header_1 d-none d-lg-block'>
          <a className="Smartphones font" href="/product_listing/smartphones">Smartphones<img src="/Icon/Dropdown.png" /></a>
          <a className="Laptops font" href="/product_listing/laptops">Laptops<img src="/Icon/Dropdown.png" /></a>
          <a className="Home_decor font" href="/product_listing/fragrances">fragrances<img src="/Icon/Dropdown.png" /></a>
          <div className="More font">More<img src="/Icon/Dropdown.png" /></div>
        </div>

        <div className="header_2 d-none d-lg-block">
          <div className="Search_bar font"><img src="/Icon/Search.png" /></div>
        </div>
      </div>
    </>
  );
};
export default Navbar;




























