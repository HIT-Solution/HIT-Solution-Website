import React from "react";
import { Bounce } from "react-reveal";

const Faq = () => {
  return (
    <section id="faq" class="faq">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4">
          <div class="col-lg-4">
            <div class="content px-xl-5">
              <h3>
                Frequently Asked <strong>Questions</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
            </div>
          </div>

          <div class="col-lg-8">
            <Bounce bottom>
              <div
                class="accordion accordion-flush"
                id="faqlist"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      <span class="num">1.</span>
                      What types of IoT projects does your company specialize
                      in?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      We specialize in a wide range of IoT projects including
                      smart home automation, industrial IoT solutions, wearable
                      devices, and IoT platforms integration.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      <span class="num">2.</span>
                      Can you handle both frontend and backend development for
                      websites?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      Yes, we provide full-stack website development services,
                      covering everything from user interface design to
                      server-side logic and database integration.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      <span class="num">3.</span>
                      Do you develop apps for both Android and iOS platforms?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      Absolutely, our mobile app development team is proficient
                      in creating native apps for both Android and iOS, ensuring
                      seamless performance and user experience across different
                      devices.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      <span class="num">4.</span>
                      What areas of Machine Learning and AI do you focus on?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      We focus on various applications of Machine Learning and
                      AI, including natural language processing, predictive
                      analytics, recommendation systems, and automated
                      decision-making algorithms.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      <span class="num">5.</span>
                      How do you approach 3D modeling and architectural design
                      projects?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      We leverage advanced software tools to create detailed 3D
                      models and architectural designs, catering to diverse
                      needs such as real estate visualization, product
                      prototyping, and virtual simulations.
                    </div>
                  </div>
                </div>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
