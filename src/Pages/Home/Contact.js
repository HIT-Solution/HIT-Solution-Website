import React from "react";
import { Bounce } from "react-reveal";

const Contact = () => {
  return (
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Contact</h2>
         <Bounce bottom>
         <p>
            Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
            porro nihil id ratione ea sunt quis dolorem dolore earum
          </p>
         </Bounce>
        </div>

        <div class="row gx-lg-0 gy-4">
          <div class="col-lg-4">
         
              <div class="info-container d-flex flex-column align-items-center justify-content-center">
              <div class="info-item d-flex">
  <a href="https://maps.google.com/?q=A108+Adam+Street,+New+York,+NY+535022" target="_blank">
    <i class="bi bi-geo-alt flex-shrink-0"></i>
  </a>
  <div>
    <h4>Location:</h4>
    <p>A108 Adam Street, New York, NY 535022</p>
  </div>
</div>

<div class="info-item d-flex">
  <a href="mailto:hasansit48@gmail.com">
    <i class="bi bi-envelope flex-shrink-0"></i>
  </a>
  <div>
    <h4>Email:</h4>
    <p>hasansit48@gmail.com</p>
  </div>
</div>

<div class="info-item d-flex">
  <a href="https://wa.me/8801950090248" target="_blank">
    <i class="bi bi-phone flex-shrink-0"></i>
  </a>
  <div>
    <h4>Call:</h4>
    <p>+8801950090248</p>
  </div>
</div>

<div class="info-item d-flex">
  <i class="bi bi-clock flex-shrink-0"></i>
  <div>
    <h4>Open Hours:</h4>
    <p>Mon-Sat: 11AM - 23PM</p>
  </div>
</div>

              </div>
           
          </div>

          <div class="col-lg-8">
            
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="7"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
