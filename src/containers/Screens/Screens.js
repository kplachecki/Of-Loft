import React from "react";
import About from "./About/About";
import Furniture from "./Furniture/Furniture";
import Lighting from "./Lighting/Lighting";
import Contact from "./Contact/Contact";
import classes from "./Screens.module.css";

const screens = () => {
  return (
    <div className={classes.body}>
      <About />
      <Furniture />
      <Lighting />
      <Contact />
    </div>
  );
};

export default screens;
