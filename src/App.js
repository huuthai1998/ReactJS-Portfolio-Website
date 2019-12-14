import React, { Component } from "react";
import Introduction from "./sections/Introduction/Introduction.js";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Experience from "./sections/Experience/Experience.js";
import Proficiency from "./sections/Proficiency/Proficiency.js";
import Contact from "./sections/Contact/Contact.js";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Introduction />
        <Experience />
        <Proficiency />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
