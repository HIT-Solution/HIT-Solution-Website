import React from "react";
import clients from "../assets/img/stats-img.svg";

const OurClients = () => {
  return (
    <div>
      <section id="stats-counter" class="stats-counter">
        <div class="container" data-aos="fade-up">
          <div class="row gy-4 align-items-center">
            <div class="col-lg-6">
              <img src={clients} alt="" class="img-fluid" />
            </div>

            <div class="col-lg-6">
              <div class="stats-item d-flex align-items-center">
                <span class="count-plus">150+</span>
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut
                </p>
              </div>

              <div class="stats-item d-flex align-items-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="150+"
                  data-purecounter-duration="1"
                  class="purecounter"
                >150+</span>
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut
                </p>
              </div>

              <div class="stats-item d-flex align-items-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="500+"
                  data-purecounter-duration="1"
                  class="purecounter"
                >24/7</span>
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
