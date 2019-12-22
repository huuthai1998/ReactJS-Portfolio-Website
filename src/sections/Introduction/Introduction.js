import React from "react";
import "./Introduction.css";
import resume from "../../resources/resume.pdf";
import profilePic from "../../resources/profilePicture.jpg"
class Introduction extends React.Component {
  render() {
    return (
      <main className="information" id="informationSession">
        <div name="info" className="basicInfo">
          <h1 className="introduction">
            {" "}
            Hi! I'm Thai Nguyen, <br /> a software developer.{" "}
          </h1>
          <h3 className="facts"> Here are some facts about me: </h3>
          <div className="facts-list">
            <ul>
              <li> Hometown: Ho Chi Minh city, Vietnam </li>
              <li> Currently live in: LA, California</li>
              <li> Education: Computer Science at UCSC </li>
              <li> Hobbies: Do Coding challenges, soccer, video games</li>
            </ul>
          </div>
        </div>
        <div className="resumeWrapper">
        <a href={resume} target="_blank">
            <button  className="resume"> My Resume </button>
        </a>
         </div>
        <div name="photo" className="profilePictureWrapper">
          <img
            className="profilePicture"
            src={profilePic}
            alt="My profile"
          />
        </div>
      </main>
    );
  }
}

export default Introduction;
