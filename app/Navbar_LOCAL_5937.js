import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Navbar = () => {
  return (
    <>
      <body>
        <div class="main-navbar shadow-sm sticky-top">
          <div class="top-navbar">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                  <h5 class="brand-name">Shopping App</h5>
                </div>
                <div class="col-md-5 my-auto">
                  <form role="search">
                    <div class="input-group">
                      <input type="search" placeholder="Search your product" className="col-sm-11 searchbar" />
                      <button class="btn bg-white col-sm-1 clickbutton " type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="col-md-5 my-auto">
                  <ul class="nav justify-content-end">

                    <li class="nav-item">
                      <a class="nav-link" href="/cart">
                        <i class="fa fa-shopping-cart"></i> Cart (0)
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/placeOrder">
                        <i class="fa fa-heart"></i> Orders
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-user"></i> Username
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="/profile"><i class="fa fa-user"></i> Profile</a></li>

                        <li><a class="dropdown-item" href="/placeOrder"><i class="fa fa-list"></i> My Orders</a></li>
                        <li><a class="dropdown-item" href="/my_wishlist"><i class="fa fa-heart"></i> My Wishlist</a></li>
                        <li><a class="dropdown-item" href="/cart"><i class="fa fa-shopping-cart"></i> My Cart</a></li>
                        <li><a class="dropdown-item" href="/logout"><i class="fa fa-sign-out"></i> Logout</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/login">
                        <i class="fa fa-heart"></i> Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                E-Commerce
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="/all_categories">All Categories</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/sell">Sell</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/mens_collection">Men's Collection</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/womens_collection">Women's Collection</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/electronic">Electronics</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
      </body>


    </>
  );
};

export default Navbar;