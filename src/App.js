import React, { Component } from "react";
import Introduction from "./sections/Introduction/Introduction.js";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import Experience from "./sections/Experience/Experience.js";
import Proficiency from "./sections/Proficiency/Proficiency.js";
import Contact from "./sections/Contact/Contact.js";
import "./app.css";
import ipify from "ipify";
import iplocation from "iplocation";
import * as firebase from "firebase";
import firebaseConfig from "./firebaseConfig.js";

class App extends Component {
  componentWillMount() {
    const visitTime = firebase.firestore().collection("Visitors");
    visitTime
      .doc(Date.now().toString())
      .set({ time: Date() })
      .then(() => {
        console.log("Succeed");
      })
      .catch(err => {
        console.log(err);
      });
  }

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
