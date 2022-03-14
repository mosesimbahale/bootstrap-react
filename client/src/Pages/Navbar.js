import React from 'react'
import {Link } from 'react-router-dom';


const Navbar = () => {
  return (

    
<nav className="navbar navbar-expand-sm navbar-light bg-light shadow">
    <div class="container">
      <a class="navbar-brand" href="#">
        SC Logo
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" class="nav-link active" aria-current="page">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link">
              {" "}
              About{" "}
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/profile" class="nav-link">
              {" "}
              Profile{" "}
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/contact" class="nav-link">
              {" "}
              Contact{" "}
            </Link>
          </li>


          <li class="nav-item">
            <Link to="/blog" class="nav-link">
              {" "}
              Blog{" "}
            </Link>
          </li>
        
        </ul>






       

        <Link to="/signin" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
          <i className="fa fa-sign-in me-2"></i>SignIn
        </Link>

        <Link to="/signin" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
          <i className="fa fa-sign-in me-2"></i>Write
        </Link>


        <Link  to="/signup" className="btn btn-primary ms-2 px-4 rounded-pill">
          <i className="fa fa-user-plus me-2"></i>Get Started
        </Link>

      

      </div>
    </div>
  </nav>



  );
};

export default Navbar;