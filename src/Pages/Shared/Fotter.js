import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gy-4">
          <div className="col-lg-5 col-md-12 footer-info text-center text-md-start">
            <a
              href="index.html"
              className="logo d-flex align-items-center text-decoration-none justify-content-center justify-content-md-start"
            >
              <span>Hasan's IT Solution</span>
            </a>
            <p className="text-center text-md-start">
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="social-links d-flex mt-4 justify-content-center justify-content-md-start">
              <a
                href="https://www.google.com/"
                target="_blank"
                className="twitter text-decoration-none"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61558698256495"
                target="_blank"
                className="facebook text-decoration-none"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="instagram text-decoration-none"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/hasansit/"
                target="_blank"
                className="linkedin text-decoration-none"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links text-center text-md-start ">
            <h4 className="text-center text-md-start">Useful Links</h4>
            <ul className="list-unstyled ">
              <li>
                <a
                  href="#"
                  className="text-decoration-none text-center text-md-start "
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links  text-md-start">
            <h4 className="text-md-start">Our Services</h4>
            <ul className="list-unstyled text-center text-md-start">
              <li>
                <a href="#" className="text-decoration-none">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Mobile App Creation (Android & iOS)
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  IOT
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Machine Learning & AI
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Custom Software Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Computer Vision
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  3D Modeling and Graphics
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start ">
            <h4 className="text-center text-md-start">Contact Us</h4>
            <p className="text-center text-md-start ">
              H 20, Lutfunnesa Road, Priyanka City, Sector 12, Uttara,
              <br />
              Dhaka, Bangladesh
              <br />
              <strong>Phone:</strong> +8801950090248
              <br />
              <strong>Email:</strong> hasansit48@gmail.com
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="copyright text-center">
          &copy; Copyright 2024{" "}
          <strong>
            <span>Hasan's IT Solution</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits text-center">
          Designed by{" "}
          <a href="https://bootstrapmade.com/" className="text-decoration-none">
            sakhwathosen
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
