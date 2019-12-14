import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../resources/logo.jpg";
import menu from "../../resources/menu.png";
import x from "../../resources/x.png"

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      imgPath: [x, menu]
    };
  }
  changeSrc() {
    if (this.state.index === 0) {
      this.setState({index: 1})
    }
    else {
      this.setState({index: 0})
    }
  }
  getImageName = () => this.state.open ? 'plus' : 'minus'
  render() {
    return (
      <nav className={styles.topNav}>
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={logo} alt="My logo" />
        </div>
        <div id={styles.blankNavBar}> </div>
        <div className={styles.topButtonsWarper}>
          <a
            className={styles.topButtons}
            id={styles.aboutButton}
            href="#informationSession"
          >
            About
          </a>
          <a
            className={styles.topButtons}
            id={styles.experienceButton}
            href="#experienceSession"
          >
            Experience
          </a>
          <a
            className={styles.topButtons}
            id={styles.codingProficiencyButton}
            href="#proficiencySession"
          >
            Technical skills
          </a>
          <a
            className={styles.topButtons}
            id={styles.contactButton}
            href="#contactSession"
          >
            Contact
          </a>
        </div>
        <div className={styles.menuBurger}> 
            <img className={styles.menu}  onClick={this.changeSrc.bind(this)} src={this.state.imgPath[this.state.index]} alt="Menu burger"/>
          </div>
      </nav>
    );
  }
}
export default NavBar;
