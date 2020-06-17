import React, { useState, useEffect } from "react";
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

export const ModeContext = React.createContext({
  mode: false,
  toggleMode: () => {},
});

export default function App() {
  const [mode, setMode] = useState(ModeContext.mode);
  const toggleMode = () => {
    setMode(!mode);
    localStorage.setItem("mode", JSON.stringify(!mode));
  };

  // useEffect(() => {
  //   const visitTime = firebase.firestore().collection("Visitors");
  //   visitTime
  //     .doc(Date.now().toString())
  //     .set({ time: Date() })
  //     .then(() => {
  //       console.log("Succeed");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setMode(localStorage.getItem("mode") === "true");
  // }, []);

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <NavBar />
      <Introduction />
      <Experience />
      <Proficiency />
      <Contact />
      <Footer />
    </ModeContext.Provider>
  );
}
