import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row row-cols-4 gy-4">
          <div className="col-lg-5 col-md-12 footer-info text-center text-md-start">
            <a href="index.html" className="logo d-flex align-items-center text-decoration-none">
              <span>Hasan's IT Solution</span>
            </a>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links d-flex mt-4">
              <a href="https://www.google.com/" target='_blank' className="twitter text-decoration-none"><i className="bi bi-twitter"></i></a>
              <a href="https://www.facebook.com/" target='_blank'  className="facebook text-decoration-none"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/" target='_blank' className="instagram text-decoration-none"><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/" target='_blank' className="linkedin text-decoration-none"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links text-center text-md-start">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#" className="text-decoration-none">Home</a></li>
              <li><a href="#" className="text-decoration-none">About us</a></li>
              <li><a href="#" className="text-decoration-none">Services</a></li>
              <li><a href="#" className="text-decoration-none">Terms of service</a></li>
              <li><a href="#" className="text-decoration-none">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links text-center text-md-start">
            <h4 className='text-left'>Our Services</h4>
            <ul>
              <li><a href="#" className="text-decoration-none">Web Design</a></li>
              <li><a href="#" className="text-decoration-none">Web Development</a></li>
              <li><a href="#" className="text-decoration-none">Product Management</a></li>
              <li><a href="#" className="text-decoration-none">Marketing</a></li>
              <li><a href="#" className="text-decoration-none">Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +8801950090248<br/>
              <strong>Email:</strong> hasansit48@gmail.com<br/>
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="copyright">
          &copy; Copyright 2024 <strong><span>Hasan's IT Solution</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/" className="text-decoration-none">sakhwathosen</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
