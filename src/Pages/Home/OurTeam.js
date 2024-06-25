import React from "react";
import team1 from "../../../src/Pages/assets/img/team/imtiaze.png";
import team2 from "../assets/img/team/kazi sakib.png";
import team3 from "../assets/img/team/team-3.jpg";
import team4 from "../assets/img/team/team-4.jpg";
import team5 from "../assets/img/team/man.png"
import { Bounce } from "react-reveal";

const OurTeam = () => {
  return (
    <section id="team" class="team">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Our Team</h2>
          <p>
            Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
            porro nihil id ratione ea sunt quis dolorem dolore earum
          </p>
        </div>

        <div class="row gy-4">
          <div
            class="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="member">
              <img src={team3} class="img-fluid" alt="" />
              <h4>Jahid Hasan </h4>
              <span>Chief Executive Officer & Founder </span>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="member">
              <img src={team3} class="img-fluid" alt="" />
              <h4>Nayeem</h4>
              <span>Senior Software Engineer(6 years+) </span>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="member">
              <img src={team3} class="img-fluid" alt="" />
              <h4>Kazi Shakib</h4>
              <span>Software Engineer [(Flutter) 3 years+]</span>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="member">
              <img src={team3} class="img-fluid" alt="" />
              <h4>Mohd Inkead</h4>
              <span>R&D Engineer (Intern)</span>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="member">
              <img src={team3} class="img-fluid" alt="" />
              <h4>Hasan Shozib</h4>
              <span>UI UX (Intern)</span>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="member">
              <img src={team3} class="img-fluid" alt="" />
              <h4>Sakhawat Hosen</h4>
              <span>Software Engineer[(React.Js) 2 years+]</span>
              <div class="social">
                <a href="">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
