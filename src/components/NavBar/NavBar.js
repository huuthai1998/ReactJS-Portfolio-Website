import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../resources/logo.jpg";
import menu from "../../resources/menu.png";
import menuLight from "../../resources/menu-light.png";
import x from "../../resources/x.png";
import xLight from "../../resources/x-light.png";
import { ModeContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isDark, setIsdark] = useState(false);
  const [index, setIndex] = useState(0);
  const [imgPath, setImgPath] = useState([menuLight, xLight]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(
    document.documentElement.clientWidth <= 1200 ? 0 : 40
  );

  useEffect(() => {
    if (localStorage.getItem("mode") === "true") setImgPath([menu, x]);
    else setImgPath([menuLight, xLight]);
    const windowListener = window.addEventListener("resize", resetDimension);
    return () => window.removeEventListener("resize", windowListener);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("mode") === "true") setImgPath([menu, x]);
    else setImgPath([menuLight, xLight]);
  }, [isDark]);

  const resetDimension = () => {
    if (
      document.documentElement.clientWidth <= 1200 &&
      !isClicked &&
      !isSidebarOpen
    )
      setSidebarWidth(0);
    else if (document.documentElement.clientWidth > 1200) setSidebarWidth(40);
  };

  const toggleSidebar = () => {
    setIsClicked(true);
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) setSidebarWidth(70);
    else setSidebarWidth(0);
    changeSrc();
  };
  const blankNavBar = () => {
    if (!isSidebarOpen) {
      return (
        <div
          id={styles.blankNavBar}
          onClick={toggleSidebar}
          style={{ width: 0 + "vw" }}
        >
          {" "}
        </div>
      );
    }
    return (
      <div
        id={styles.blankNavBar}
        onClick={toggleSidebar}
        style={{ width: 100 + "vw" }}
      >
        {" "}
      </div>
    );
  };

  const changeSrc = () => {
    if (index === 1) setIndex(0);
    else setIndex(1);
  };

  return (
    <ModeContext.Consumer>
      {({ mode, toggleMode }) => {
        const Wrapper = {
          background: !mode ? "white" : "black",
          color: !mode ? "black" : "white",
        };
        const buttonStyle = {
          color: mode ? "white" : "black",
        };
        return (
          <nav className={styles.topNav} style={Wrapper}>
            <div className={styles.logoWrapper}>
              <img className={styles.logo} src={logo} alt="My logo" />
            </div>
            {blankNavBar()}
            <div
              className={styles.topButtonsWarper}
              style={{ width: sidebarWidth + "vw" }}
            >
              <a
                style={buttonStyle}
                className={styles.topButtons}
                id={styles.aboutButton}
                href="#informationSession"
              >
                ABOUT
              </a>
              <a
                style={buttonStyle}
                className={styles.topButtons}
                id={styles.experienceButton}
                href="#experienceSession"
              >
                EXPERIENCE
              </a>
              <a
                style={buttonStyle}
                className={styles.topButtons}
                id={styles.codingProficiencyButton}
                href="#proficiencySession"
              >
                SKILLS
              </a>
              <a
                style={buttonStyle}
                className={styles.topButtons}
                id={styles.contactButton}
                href="#contactSession"
              >
                CONTACT
              </a>
              <label
                className={styles.switch}
                onChange={() => {
                  toggleMode();
                  setIsdark(!isDark);
                }}
              >
                <input type="checkbox" checked={mode}></input>
                <span className={styles.slider}>
                  {mode ? (
                    <FontAwesomeIcon
                      className={styles.moon}
                      icon={faMoon}
                      size="2x"
                    />
                  ) : (
                    <FontAwesomeIcon
                      className={styles.sun}
                      icon={faSun}
                      size="2x"
                    />
                  )}
                </span>
              </label>
            </div>
            <div className={styles.menuBurger}>
              <button
                type="button"
                className={styles.collapse}
                onClick={toggleSidebar}
              >
                <img
                  className={styles.menu}
                  onClick={changeSrc}
                  src={imgPath[index]}
                  alt="Menu burger"
                />
              </button>
            </div>
          </nav>
        );
      }}
    </ModeContext.Consumer>
  );
}
export default NavBar;
