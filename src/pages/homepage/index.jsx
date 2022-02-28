import React from "react";
import AboutUs from "./AboutUs/index";
import Footer from "./Footer/index";
import MainPick from "./MainPick/index";
import MenuBar from "./Menu";
import News from "./News/index";
import Team from "./Team/index";

const Homepage = () => {
  return (
    <div className="home-page">
      <MenuBar />
      <MainPick />
      <News />
      <AboutUs />
      <Team />
      <Footer />
    </div>
  );
};

export default Homepage;
