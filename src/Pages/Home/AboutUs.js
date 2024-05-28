import React from "react";
import about1 from "../../Pages/assets/img/about.jpg";
import about2 from "../../Pages/assets/img/about-2.jpg";

const AboutUs = () => {
  return (
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>About Us</h2>
          <p>
            {" "}
            Our Services: IoT Based Projects, Website Development (Full Stack),
            Mobile Apps Development (Android & iOS), Machine Learning & AI, Deep
            Learning & Computer Vision, Robotics Project, 3D Modeling &
            Architectural Design{" "}
          </p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-6">
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <img src={about1} class="img-fluid rounded-4 mb-4" alt="" />
            <p>
              Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis
              quod nisi et. Placeat debitis quia recusandae odit et consequatur
              voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
            </p>
            <p>
              Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
              cupiditate nihil vitae quo officia vel. Blanditiis eligendi
              possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut
              repellendus nobis tempore doloribus debitis explicabo similique
              sit. Accusantium sed ut omnis beatae neque deleniti repellendus.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="content ps-0 ps-lg-5">
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle-fill"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i> Ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>

              <div class="position-relative mt-4">
                <img src={about2} class="img-fluid rounded-4" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  class="glightbox play-btn"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
