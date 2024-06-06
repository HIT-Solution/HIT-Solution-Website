import React, { useState } from "react";
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
import { Bounce } from "react-reveal";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const portfolioItems = [
    { id: 1, category: "filter-app", img: service1, title: "App 1" },
    { id: 2, category: "filter-product", img: service2, title: "Product 1" },
    { id: 3, category: "filter-branding", img: service3, title: "Branding 1" },
    { id: 4, category: "filter-books", img: service4, title: "Books 1" },
    { id: 5, category: "filter-app", img: service5, title: "App 2" },
    { id: 6, category: "filter-product", img: service6, title: "Product 2" },
    { id: 7, category: "filter-branding", img: service7, title: "Branding 2" },
    { id: 8, category: "filter-books", img: service8, title: "Books 2" },
    { id: 9, category: "filter-app", img: service9, title: "App 3" },
    { id: 10, category: "filter-product", img: service10, title: "Product 3" },
    { id: 11, category: "filter-branding", img: service11, title: "Branding 3" },
    { id: 12, category: "filter-books", img: service12, title: "Books 3" },
  ];

  const filteredItems =
    activeFilter === "*"
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div>
      <section id="portfolio" className="portfolio sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Portfolio</h2>
            <p>
              Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
              nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
            </p>
          </div>
<Bounce bottom>
<div
            className="portfolio-isotope"
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <ul className="portfolio-flters">
                <li
                  className={activeFilter === "*" ? "filter-active" : ""}
                  onClick={() => setActiveFilter("*")}
                >
                  All
                </li>
                <li
                  className={activeFilter === "filter-app" ? "filter-active" : ""}
                  onClick={() => setActiveFilter("filter-app")}
                >
                  App
                </li>
                <li
                  className={activeFilter === "filter-product" ? "filter-active" : ""}
                  onClick={() => setActiveFilter("filter-product")}
                >
                  Product
                </li>
                <li
                  className={activeFilter === "filter-branding" ? "filter-active" : ""}
                  onClick={() => setActiveFilter("filter-branding")}
                >
                  Branding
                </li>
                <li
                  className={activeFilter === "filter-books" ? "filter-active" : ""}
                  onClick={() => setActiveFilter("filter-books")}
                >
                  Books
                </li>
              </ul>
            </div>

            <div className="row gy-4 portfolio-container">
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className={`col-xl-4 col-md-6 portfolio-item ${item.category}`}
                >
                  <div className="portfolio-wrap">
                    <a
                      href={`assets/img/portfolio/${item.img}`}
                      data-gallery="portfolio-gallery-app"
                      className="glightbox text-decoration-none"
                    >
                      <img src={item.img} className="img-fluid" alt="" />
                    </a>
                    <div className="portfolio-info">
                      <h4>
                        <a href="portfolio-details.html" title="More Details" className="text-decoration-none">
                          {item.title}
                        </a>
                      </h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
</Bounce>

          
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
