import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bounce } from "react-reveal";
import testimonials1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonials2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonials3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonials4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonials5 from "../assets/img/testimonials/testimonials-5.jpg";

const Testimonials = () => {
  const reviews = [
    {
      name: "othman00101",
      country: "United States",
      review:
        "TrueFact is completely patient and so passionate about IoT solutions that he immediately took an interest in my project and gave it undivided attention. Whenever there was an issue, he kept trying different efficient solutions to deliver exactly what I asked for. I would recommend him to anyone who needs a custom embedded system design solution for their business or IoT projects and I will use him again. Thank you, TrueFact",
    },
    {
      name: "heel3r",
      country: "United States",
      review:
        "The seller overcharged me for work that he knew would be very easy to deliver. His delivery consisted of sample code from GitHub that he passed off as hours of work.",
    },
    {
      name: "grantoswald",
      country: "Australia",
      review:
        "The team communicated well and was able to quickly comprehend the requirements. They listened well and asked appropriate questions Look forward to future projects with them.",
    },
    {
      name: "jamescscoleman",
      country: "United States",
      review:
        "Great service. The seller was very easygoing and easy to get along with. He threw in complimentary Arduino code to interface with the IOT device",
    },
    {
      name: "nickbogaerts450",
      country: "Belgium",
      review:
        "Aryan was very helpful in coding my programme. Every question I asked was answered and solved perfectly.",
    },
    {
      name: "mcarranco",
      country: "United States",
      review:
        "He listened to my inexperienced needs and made me feel welcomed. Very easy to talk to. I will definitely use it for future projects.",
    },
    {
      name: "andy_min",
      country: "South Korea",
      review:
        "I had a great experience working with this app development contractor. He demonstrated a high level of responsibility and completed the work quickly. His promptness and attention to detail in delivering the project were impressive. I highly recommend his services for anyone looking for reliable and efficient app development work.",
    },
    {
      name: "rspebble",
      country: "United States",
      review:
        "I was very satisfied with this work. Aryan was great to work with. Quick communication and delivery. Rapid responses and being willing to stay up late to help a client. I will come back again.",
    },
    {
      name: "miroslavbor",
      country: "United States",
      review:
        "He delivered what we needed. We went back and forth in our communication, and he was willing to meet all of our requirements each time. I would recommend him, and we will definitely consider working with him again in the future.",
    },
    {
      name: "design_goat",
      country: "United States",
      review:
        "Aryan was great at working with my revisions and also sent me extra code for a Flutter app. Would recommend it!",
    },
    {
      name: "timnijland687",
      country: "Unknown",
      review: "Good communication, Nice experience working with TrueFact",
    },
    {
      name: "tippytovi2",
      country: "United States",
      review:
        "Very helpful. Strong knowledge of the topic to fix issues quickly. Highly recommend it.",
    },
    {
      name: "tippytovi2",
      country: "United States",
      review:
        "Very helpful. Adheres to tight deadlines. Was able to fix all the problems.",
    },
    {
      name: "othman00101",
      country: "United States",
      review: "Aryan offers amazing care and service. I would use him again",
    },
    {
      name: "timnijland687",
      country: "Unknown",
      review:
        "Rovin has good knowledge about what he does. Definitely can recommend!",
    },
    {
      name: "mcarranco",
      country: "United States",
      review:
        "Very easy to talk to and understands your needs. 100% will use again!",
    },
    {
      name: "mcarranco",
      country: "United States",
      review: "Above and beyond my expectations. 100% will use again.",
    },
    {
      name: "astrfera",
      country: "Saudi Arabia",
      review: "Good to work with, I will hire him again",
    },
    {
      name: "astrfera",
      country: "Saudi Arabia",
      review: "It is my second time working with",
    },
  ];

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
                {reviews.map((review, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="testimonial-wrap">
                      <div className="testimonial-item">
                        <div className="d-flex align-items-center">
                          <img
                            src={
                              index === 0
                                ? testimonials1
                                : index === 1
                                ? testimonials2
                                : index === 2
                                ? testimonials3
                                : index === 3
                                ? testimonials4
                                : testimonials5
                            }
                            className="testimonial-img flex-shrink-0"
                            alt=""
                          />
                          <div>
                            <h3>{review?.name}</h3>
                            <h4>({review?.country})</h4>
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
                          {review?.review}
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
