import React from "react";
import Title from "../Shared/Title";
import NavBar from "../Shared/NavBar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Technology from "../Shared/Technology";
import Fotter from "../Shared/Fotter";
import OurClients from "./OurClients";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import OurTeam from "./OurTeam";
import Contact from "./Contact";
import Blog from "./Blog";
import Faq from "./Faq";

const Home = () => {
  return (
    <div>
      <Title />
      <NavBar />
      <Banner />
      <AboutUs />
      <Testimonials/>
      <Faq/>
      <Contact/>
      <Fotter/>
    </div>
  );
};

export default Home;
