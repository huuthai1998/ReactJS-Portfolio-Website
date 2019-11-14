import React, { Component } from "react";
import Introduction from "./sections/Introduction/Introduction.js";
import NavBar from "./header-footer/NavBar/NavBar.js";
import Experience from "./sections/Experience/Experience.js";
import Proficiency from "./sections/Proficiency/Proficiency.js";
import Contact from "./sections/Contact/Contact.js";
import "./app.css"

class App extends Component {
  render() {
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        <Introduction />
        <Experience />
        <Proficiency />
        <Contact />
      </div>
    </div>
  );
  }
}

export default App;
