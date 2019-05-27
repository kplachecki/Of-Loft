import React from "react";
import classes from "./About.module.css";
import logo from "./../../../assets/Logo/LOGO-1.png";

const about = () => (
  <React.Fragment>
    <div id="about" className={classes.body}>
      <div className={classes.content}>
        <img src={logo} height="70%" width="70%" />
      </div>
    </div>
  </React.Fragment>
);

export default about;
