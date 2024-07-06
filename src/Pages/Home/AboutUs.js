import React from "react";
import about1 from "../../Pages/assets/img/about.jpg";
import about2 from "../../Pages/assets/img/about-2.jpg";
import { Bounce } from "react-reveal";

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <Bounce bottom>
            <p>
            Our company specializes in cutting-edge technology solutions across IoT, web development, mobile apps, AI, Machine Learning, robotics, and architectural design. We are committed to delivering innovative and scalable solutions that empower businesses and individuals worldwide.
            </p>
          </Bounce>
        </div>

        <Bounce bottom>
          <div className="row gy-4">
            <div className="col-lg-6">
       
              <img src={about1} className="img-fluid rounded-4 mb-4" alt="" />
              
              <p>
              <strong className="text-decoration-underline text-left"> Vision: </strong> <br />
              To be a leading provider of transformative technology solutions that drive digital innovation across industries, enhancing efficiency, sustainability, and connectivity globally.
                </p>
           
            </div>
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                          
              <p>
              <strong className="text-decoration-underline text-left"> Mission: </strong> <br />
                  Our mission is to harness the power of emerging technologies
                  like AI, IoT, and robotics to create practical, impactful
                  solutions tailored to the unique needs of our clients. We
                  strive to deliver excellence through continuous innovation,
                  collaborative partnerships, and a customer-centric approach.
                </p>

                <div className="position-relative mt-4">
                  <img src={about2} className="img-fluid rounded-4" alt="" />
                  <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox play-btn"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    </section>
  );
};

export default AboutUs;
