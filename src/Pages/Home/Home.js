import React from "react";
import Title from "../Shared/Title";
import NavBar from "../Shared/NavBar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Technology from "../Shared/Technology";
import Fotter from "../Shared/Fotter";
import OurClients from "./OurClients";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div>
      <Title />
      <NavBar />
      <Banner />
      <AboutUs />
      <Technology/>
      <OurClients/>
      <Portfolio/>
      <Fotter/>
      
      
    </div>
  );
};

export default Home;
