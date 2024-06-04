import React from "react";
import service1 from "../assets/img/portfolio/app-1.jpg";
import service2 from "../assets/img/portfolio/product-1.jpg";
import service3 from "../assets/img/portfolio/branding-1.jpg";
import service4 from "../assets/img/portfolio/books-1.jpg";
import service5 from "../assets/img/portfolio/app-2.jpg";
import service6 from "../assets/img/portfolio/product-2.jpg";
import service7 from "../assets/img/portfolio/branding-2.jpg";
import service8 from "../assets/img/portfolio/books-2.jpg";
import service9 from "../assets/img/portfolio/app-3.jpg";
import service10 from "../assets/img/portfolio/product-3.jpg";
import service11 from "../assets/img/portfolio/branding-3.jpg";
import service12 from "../assets/img/portfolio/books-3.jpg";

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio" class="portfolio sections-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Portfolio</h2>
            <p>
              Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
              nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
            </p>
          </div>

          <div
            class="portfolio-isotope"
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <ul class="portfolio-flters">
                <li data-filter="*" class="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-branding">Branding</li>
                <li data-filter=".filter-books">Books</li>
              </ul>
            </div>

            <div class="row gy-4 portfolio-container">
              <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/app-1.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service1} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        App 1
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/product-1.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service2} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Product 1
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/branding-1.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service3} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Branding 1
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-books">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/books-1.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service4} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Books 1
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/app-2.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service5} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        App 2
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/product-2.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service6} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Product 2
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/branding-2.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service7} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Branding 2
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-books">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/books-2.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service8} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Books 2
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/app-3.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service9} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        App 3
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-product">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/product-3.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service10} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Product 3
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-branding">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/branding-3.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service11} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Branding 3
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-md-6 portfolio-item filter-books">
                <div class="portfolio-wrap">
                  <a
                    href="assets/img/portfolio/books-3.jpg"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox"
                  >
                    <img src={service12} class="img-fluid" alt="" />
                  </a>
                  <div class="portfolio-info">
                    <h4>
                      <a href="portfolio-details.html" title="More Details">
                        Books 3
                      </a>
                    </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
