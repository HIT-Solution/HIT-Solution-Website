import React from "react";
import testimonials1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonials2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonials3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonials4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonials5 from "../assets/img/testimonials/testimonials-5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:3 ,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-header text-center">
          <h2>Testimonials</h2>
          <p>
            Voluptatem quibusdam ut ullam perferendis repellat non ut
            consequuntur est eveniet deleniti fignissimos eos quam
          </p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="slider-container">
            <Slider {...settings}>
              
                <div className="col-md-4 mb-4">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonials1}
                          className="testimonial-img flex-shrink-0"
                          alt=""
                        />
                        <div>
                          <h3>Saul Goodman</h3>
                          <h4>Ceo &amp; Founder</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
          
            
                <div className="col-md-4 mb-4">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonials2}
                          className="testimonial-img flex-shrink-0"
                          alt=""
                        />
                        <div>
                          <h3>Sara Wilsson</h3>
                          <h4>Designer</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
             
            
                <div className="col-md-4 mb-4">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonials3}
                          className="testimonial-img flex-shrink-0"
                          alt=""
                        />
                        <div>
                          <h3>Jena Karlis</h3>
                          <h4>Store Owner</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
          
              
                <div className="col-md-4 mb-4">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonials4}
                          className="testimonial-img flex-shrink-0"
                          alt=""
                        />
                        <div>
                          <h3>
                            Othman{" "}
                            <span style={{ fontSize: "inherit" }}>🇺🇸</span>
                          </h3>
                          <h4>Entrepreneur</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        Hasan is completely patient and so passionate about IoT
                        solutions, he immediately took interest in my project
                        and gave it undivided attention. Whenever there was an
                        issue he kept trying different efficient solution to
                        deliver exactly what I asked for. I would recommend him
                        to anyone who needs a custom embedded system design
                        solution for their business or IoT projects and I will
                        use him again. Thank you Hasan
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
         
            
                <div className="col-md-4 mb-4">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonials5}
                          className="testimonial-img flex-shrink-0"
                          alt=""
                        />
                        <div>
                          <h3>
                            grantoswald{" "}
                            <span style={{ fontSize: "inherit" }}>🇦🇺</span>
                          </h3>
                          <h4>Entrepreneur</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        The team communicated well and was able to quickly
                        comprehend the requirements. They listened well and
                        asked appropriate questions. Look forward to future
                        projects with them.
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
            
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
