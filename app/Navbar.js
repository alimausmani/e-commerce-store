import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  return (
    <>
      <div className="main-navbar shadow-sm sticky-top">
        <div className="top-navbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                <h5 className="brand-name">Shopping App</h5>
              </div>
              <div className="col-md-5 my-auto">
                <form role="search">
                  <div className="input-group">
                    <input
                      type="search"
                      placeholder="Search your product"
                      className="col-sm-11 searchbar"
                    />
                    <button className="btn bg-white col-sm-1 clickbutton" type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-5 my-auto">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link" href="/cart">
                      <i className="fa fa-shopping-cart"></i> Cart (0)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/orders">
                      <i className="fa fa-heart"></i> Orders
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-user"></i> Username
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item" href="/profile">
                          <i className="fa fa-user"></i> Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/orders">
                          <i className="fa fa-list"></i> My Orders
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/my_wishlist">
                          <i className="fa fa-heart"></i> My Wishlist
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/cart">
                          <i className="fa fa-shopping-cart"></i> My Cart
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/logout">
                          <i className="fa fa-sign-out"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      <i className="fa fa-heart"></i> Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
              E-Commerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    All Categories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sell">
                    Sell
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/mens_collection">
                    Men's Collection
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/womens_collection">
                    Women's Collection
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/electronic">
                    Electronics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/mobile">
                    Mobile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Navbar;
