import React from "react";
import Title from "../Shared/Title";
import NavBar from "../Shared/NavBar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Blog from "./Blog";
import Faq from "./Faq";
import Fotter from "../Shared/Fotter"; 

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
