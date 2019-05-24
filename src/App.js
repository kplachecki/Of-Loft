import React, { Component } from "react";
import Sidebar from "./components/SideBar/SideBar";
import Screens from "./containers/Screens/Screens";
import classes from "./App.module.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />

        <Screens />
      </React.Fragment>
    );
  }
}

export default App;
