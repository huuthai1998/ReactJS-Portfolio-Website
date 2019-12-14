import React from "react";
import "./Introduction.css";
import resume from "../../resources/resume.pdf";
class Introduction extends React.Component {
  render() {
    return (
      <main className="information" id="informationSession">
        <div className="basicInfo">
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
          <a href={resume} target="_blank">
            <button className="resume"> My Resume </button>
          </a>
        </div>
        <div className="profilePicture">
          <img
            className="slideshow"
            src="https://lh3.googleusercontent.com/j_NknsA0N0bsvHxZsBqrG_4d8aknP4Bbb20fZCMPlLNr4FpVpJ5KQaHDZxs7xEdXuyJe7rPsKA=w328-h409-no"
            alt="My profile"
          />
        </div>
      </main>
    );
  }
}

export default Introduction;
