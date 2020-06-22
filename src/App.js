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
  const axios = require("axios");
  const [mode, setMode] = useState(ModeContext.mode);
  const toggleMode = () => {
    setMode(!mode);
    localStorage.setItem("mode", JSON.stringify(!mode));
  };

  async function getGeo() {
    try {
      var ip = await axios.get("https://api.ipify.org?format=json");
      var geo = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=at_RxlfOjxG5UeSAYZWZbe88cHRruHSJ&ipAddress=${ip.data.ip}`
      );
      var location =
        geo.data.location.city +
        ", " +
        geo.data.location.region +
        ", " +
        geo.data.location.country +
        ", " +
        geo.data.location.postalCode;
      const visitTime = firebase.firestore().collection("Visitors");
      visitTime
        .doc(Date.now().toString())
        .set({ time: Date(), ip: ip.data.ip, location })
        .then(() => {
          console.log("Succeed");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    setMode(localStorage.getItem("mode") === "true");
    getGeo();
  }, []);

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
