import React from "react";
import { ModeContext } from "../../App";
import "./Experience.css";
import externalLink from "../../resources/external-link.png";

function Experience() {
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
        const expCard1 = { background: !mode ? "cyan" : "black" };
        const expCard2 = { background: !mode ? "red" : "black" };
        return (
          <div className="experience" id="experienceSession" style={Wrapper}>
            <h1 className="header" id="header-experience" style={textStyle}>
              {" "}
              Experience{" "}
            </h1>
            <div className="experienceCard" style={expCard1}>
              <div className="experienceBody">
                <div className="experienceCardHeader">
                  <h2 className="project-name">
                    {" "}
                    .NET Developer Internship at ITD company
                  </h2>
                  <a
                    className="external-link"
                    href="http://www.itd.com.vn/vi"
                    target="_blank"
                  >
                    {" "}
                    <img className="externImg" src={externalLink}></img>
                  </a>
                </div>
                <div className="experienceCardBody">
                  <li className="role-experience">
                    {" "}
                    Developed a desktop application to manage tickets for smart
                    parking lots in a team of 6.{" "}
                  </li>
                  <li>
                    {" "}
                    Refactored code and implemented more than 50% new
                    functionalities of the application.{" "}
                  </li>
                  <li>
                    {" "}
                    The application helped parking lots save a significant time
                    as well as money compared to the traditional parking lot.{" "}
                  </li>
                  <br></br>
                </div>
                <div className="experienceFooter">
                  <h2 className="experienceTech"> Worked with:</h2>
                  <div className="TechWarper">
                    <p>.NET</p>
                  </div>
                  <div className="TechWarper">
                    <p>C#</p>
                  </div>
                  <div className="TechWarper">
                    <p>WPF</p>
                  </div>
                  <div className="TechWarper">
                    <p>Subversion</p>
                  </div>
                  <div className="TechWarper">
                    <p>Microsoft Visual Studio</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="experienceCard" style={expCard2}>
              <div className="experienceBody">
                <div className="experienceCardHeader">
                  <h2 className="project-name"> Memory Game</h2>
                  <a
                    className="external-link"
                    href="https://github.com/huuthai1998/MemoryGame"
                    target="_blank"
                  >
                    {" "}
                    <img className="externImg" src={externalLink}></img>
                  </a>
                </div>
                <div className="experienceCardBody">
                  <li className="role-experience">
                    {" "}
                    Created a memory game using React Hook.{" "}
                  </li>
                  <li>Game features: </li>
                  <div className="features">
                    <li>
                      Allow player to change how many moves they can make.
                    </li>
                    <li>Show player how many moves they have left.</li>
                    <li>
                      Keep track of the current score as well as player's best
                      score.
                    </li>
                    <li>A timer to keep track of the length of the game.</li>
                    <li> Preload image for smoother gameplay. </li>
                  </div>
                  <br></br>
                </div>
                <div className="experienceFooter">
                  <h2 className="experienceTech"> Worked with:</h2>
                  <div className="TechWarper">
                    <p>ReactJS</p>
                  </div>
                  <div className="TechWarper">
                    <p>Microsoft Visual Code</p>
                  </div>
                  <div className="TechWarper">
                    <p>Github</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ModeContext.Consumer>
  );
}

export default Experience;
