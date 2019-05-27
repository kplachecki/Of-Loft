import React from "react";
import classes from "./Furniture.module.css";

const furniture = () => (
  <React.Fragment>
    <div id="furniture" className={classes.body}>
      <div className={classes.content} />
    </div>
  </React.Fragment>
);

export default furniture;
