import React from "react";
import classes from "./Sidebar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Media from "react-media";
const sidebar = () => (
  <nav id="navbar">
    <div>
      <ul className={classes.body}>
        <Media query="(max-width: 1000px">
          {matches =>
            matches ? (
              <React.Fragment>
                <li className={classes.li}>
                  <Link
                    activeClass={classes.active}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={1000}
                  >
                    About
                  </Link>
                </li>
                <li className={classes.li}>
                  <Link
                    activeClass={classes.active}
                    to="furniture"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={1000}
                  >
                    Furniture
                  </Link>
                </li>
                <li className={classes.li}>
                  <Link
                    activeClass={classes.active}
                    to="lighting"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={1000}
                  >
                    Lighting
                  </Link>
                </li>
                <li className={classes.li}>
                  <Link
                    activeClass={classes.active}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={1000}
                  >
                    Contact
                  </Link>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li className={classes.li}>
                  <Link
                    activeClass={classes.active}
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    About
                  </Link>
                </li>
                <li className={classes.li}>
                  <Link
                    activeClass={classes.active}
                    to="furniture"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Furniture
                  </Link>
                </li>
                <li className={classes.li}>
                  <Link
                    activeClass={classes.active}
                    to="lighting"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Lighting
                  </Link>
                </li>
                <li className={classes.li}>
                  <Link
                    activeClass={classes.active}
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Contact
                  </Link>
                </li>
              </React.Fragment>
            )
          }
        </Media>
      </ul>
    </div>
  </nav>
);

export default sidebar;
