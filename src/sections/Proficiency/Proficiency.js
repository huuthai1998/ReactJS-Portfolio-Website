import React from "react";
import { ModeContext } from "../../App";
import style from "./Proficiency.module.css";

function Proficiency() {
  return (
    <ModeContext.Consumer>
      {({ mode, toggleMode }) => {
        const Wrapper = {
          background: !mode ? "white" : "black",
          color: !mode ? "black" : "white",
        };
        const textStyle = {
          color: mode ? "white" : "black",
        };
        return (
          <div
            className={style.proficiency}
            id="proficiencySession"
            style={Wrapper}
          >
            <h1
              className={style.header}
              id={style.headerProficiency}
              style={textStyle}
            >
              {" "}
              Technical skills{" "}
            </h1>
            <div className={style.ListProficiency}>
              <div>
                <h2 className={style.programming}>Programming languages</h2>
                <div className={style.liWrapperPro}>
                  <li>C++</li>
                  <li>C#</li>
                  <li>C</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Dart</li>
                </div>
              </div>
              <div>
                <h2 className={style.otherTech}>Other Technologies</h2>
                <div className={style.liWrapperOther}>
                  <li>ReactJS</li>
                  <li>VueJS</li>
                  <li>Firebase</li>
                  <li>Flutter</li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>Github</li>
                  <li>Subversion</li>
                  <li>UNIX</li>
                  <li>Adobe Photoshop</li>
                  <li>Tailwind CSS</li>
                  <li>NodeJS</li>
                  <li>py2web</li>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ModeContext.Consumer>
  );
}

export default Proficiency;
