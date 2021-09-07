import React from "react";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Profile from "../../components/profile/Profile";
import Project from "../../components/project/Project";
import Quotes from "../../components/quotes/Quotes";

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <Profile />
      <Project />
      <Quotes />
    </>
  );
};

export default HomePage;
