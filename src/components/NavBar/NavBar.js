import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import logo from "../../resources/logo.jpg";
import menu from "../../resources/menu.png";
import x from "../../resources/x.png";

function NavBar() {
  const [index, setIndex] = useState(0);
  const [imgPath, setImgPath] = useState([menu, x]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(
    document.documentElement.clientWidth <= 1200 ? 0 : 40
  );

  useEffect(() => {
    const windowListener = window.addEventListener("resize", resetDimension);
    return () => window.removeEventListener("resize", windowListener);
  }, []);

  const resetDimension = () => {
    if (
      document.documentElement.clientWidth <= 1200 &&
      !isClicked &&
      !isSidebarOpen
    )
      setSidebarWidth(0);
    else if (document.documentElement.clientWidth > 1200) setSidebarWidth(40);
  };

  const toogleSidebar = () => {
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
          onClick={toogleSidebar}
          style={{ width: 0 + "vw" }}
        >
          {" "}
        </div>
      );
    }
    return (
      <div
        id={styles.blankNavBar}
        onClick={toogleSidebar}
        style={{ width: 100 + "vw" }}
      >
        {" "}
      </div>
    );
  };

  const changeSrc = () => {
    if (index === 0) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  };
  return (
    <nav className={styles.topNav}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="My logo" />
      </div>
      {blankNavBar()}
      <div
        className={styles.topButtonsWarper}
        style={{ width: sidebarWidth + "vw" }}
      >
        <a
          className={styles.topButtons}
          id={styles.aboutButton}
          href="#informationSession"
        >
          ABOUT
        </a>
        <a
          className={styles.topButtons}
          id={styles.experienceButton}
          href="#experienceSession"
        >
          EXPERIENCE
        </a>
        <a
          className={styles.topButtons}
          id={styles.codingProficiencyButton}
          href="#proficiencySession"
        >
          TECHNICAL SKILLS
        </a>
        <a
          className={styles.topButtons}
          id={styles.contactButton}
          href="#contactSession"
        >
          CONTACT
        </a>
      </div>
      <div className={styles.menuBurger}>
        <button
          type="button"
          className={styles.collapse}
          onClick={toogleSidebar}
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
}
export default NavBar;
