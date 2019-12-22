import React from "react";
import "./Experience.css";
import externalLink from "../../resources/external-link.png"

class Experience extends React.Component {
  render() {
    return (
      <div className="experience" id="experienceSession">
        <h1 className="header" id="header-experience">
          {" "}
          Experience{" "}
        </h1>
        <div className="experienceCard">
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
                > <img className="externImg" src={externalLink}></img>
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
                The application helped parking lots save a significant time as
                well as money compared to the traditional parking lot.{" "}
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
      </div>
    );
  }
}
export default Experience;
