import React from "react";

const NavBar = () => {
  return (
    <div>
      <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center text-decoration-none">
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>
              HIT Solution<span>.</span>
            </h1>
          </a>
          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a href="#hero" className="text-decoration-none">Home</a>
              </li>
              <li>
                <a href="#about" className='text-decoration-none'>About</a>
              </li>
              <li>
                <a href="#services" className='text-decoration-none'>Services</a>
              </li>
              <li>
                <a href="#portfolio" className='text-decoration-none'>Portfolio</a>
              </li>
              <li>
                <a href="#team" className='text-decoration-none'>Team</a>
              </li>
              <li>
                <a href="blog.html" className='text-decoration-none'>Blog</a>
              </li>
             
              <li>
                <a href="#contact" className='text-decoration-none'>Contact</a>
              </li>
            </ul>
          </nav>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
