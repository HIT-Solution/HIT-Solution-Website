import React from "react";
import testimonials1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonials2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonials3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonials4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonials5 from "../assets/img/testimonials/testimonials-5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bounce } from "react-reveal";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
          <Bounce bottom>
            <p>
              Voluptatem quibusdam ut ullam perferendis repellat non ut
              consequuntur est eveniet deleniti fignissimos eos quam
            </p>
          </Bounce>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="slider-container">
            <Bounce left>
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
                          <h3>Othman00101</h3>
                          <h4>(United States)</h4>
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
                        TrueFact is completely patient and so passionate about
                        IoT solutions that he immediately took an interest in my
                        project and gave it undivided attention. Whenever there
                        was an issue, he kept trying different efficient
                        solutions to deliver exactly what I asked for. I would
                        recommend him to anyone who needs a custom embedded
                        system design solution for their business or IoT
                        projects and I will use him again. Thank you, TrueFact
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="testimonial-wrap" >
                    <div className="testimonial-item">
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonials2}
                          className="testimonial-img flex-shrink-0"
                          alt=""
                        />
                        <div>
                          <h3>Heel3r</h3>
                          <h4>(United States)</h4>
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
                        The seller overcharged me for work that he knew would be
                        very easy to deliver. His delivery consisted of sample
                        code from GitHub that he passed off as hours of work.
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
                          <h3>Grantoswald</h3>
                          <h4>(Australia)
                          </h4>
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
                        The team communicated well and was able to quickly comprehend the requirements. They listened well and asked appropriate questions Look forward to future projects with them.
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
                          Jamescscoleman
                            
                          </h3>
                          <h4>(United States)</h4>
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
                        Great service. The seller was very easygoing and easy to get along with. He threw in complimentary Arduino code to interface with the IOT device
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
                          nickbogaerts450
                            <span style={{ fontSize: "inherit" }}></span>
                          </h3>
                          <h4>(Belgium)</h4>
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
                        Aryan was very helpful in coding my programme. Every question I asked was answered and solved perfectly.
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
                          mcarranco
                            <span style={{ fontSize: "inherit" }}></span>
                          </h3>
                          <h4>(United States)</h4>
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
                        He listened to my inexperienced needs and made me feel welcomed. Very easy to talk to. I will definitely use it for future projects.
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
                          Andy_min
                            <span style={{ fontSize: "inherit" }}></span>
                          </h3>
                          <h4>(South Korea)</h4>
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
                        I had a great experience workimcarrancong with this app development contractor. He demonstrated a high level of responsibility and completed the work quickly. His promptness and attention to detail in delivering the project were impressive. I highly recommend his services for anyone looking for reliable and efficient app development work
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
