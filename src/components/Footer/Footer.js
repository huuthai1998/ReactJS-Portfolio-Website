import React from "react";
import styles from "./Footer.module.css";
import linkedinSVG from "../../resources/linkedinSVG.png";
import gitSVG from "../../resources/githubsvg.png";


class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.svgWrapper}>
          <a
            className={styles.footerSVG}
            href="https://www.linkedin.com/in/thainguyen98/"
            target="_blank"
          >
            <img id={styles.linkedin} src={linkedinSVG} alt="Linkedin SVG" />
          </a>
          <a
            className={styles.footerSVG}
            href="https://github.com/huuthai1998"
            target="_blank"
          >
            <img id={styles.git} src={gitSVG} alt="Github SVG" />
          </a>
        </div>
        <div className={styles.footerText}>
          <h2 className={styles.header}> Thai Nguyen, Copyright &copy; 2019</h2>
          <h2 className={styles.header}> Made with ReactJS and Firebase</h2>
        </div>
      </div>
    );
  }
}
export default Footer;
