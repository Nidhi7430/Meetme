import React from "react";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Profile from "../../components/profile/Profile";
import Project from "../../components/project/Project";

const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <Profile />
      <Project />
    </>
  );
};

export default HomePage;
