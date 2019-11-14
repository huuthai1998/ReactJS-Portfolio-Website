import React from 'react';
import "./Experience.css";

class Experience extends React.Component {
    render() {  
    return (
        <div class="experience" id="experienceSession">
        <h1 class="header" id="header-experience"> Experience </h1>
        <div class="experienceBody">
          <h2 class="project-name"> .NET Developer Internship at <a class="external-link" href="http://www.itd.com.vn/vi" target="_blank"> ITD</a> company </h2>
          <li class="role-experience"> Developed a desktop application to manage tickets for smart parking lots in a team of 6. </li>
          <li>	Refactored code and implemented more than 50% new functionalities of the application. </li>
          <li> The application helped parking lots save a significant time as well as money compared to the traditional parking lot </li>
          <br></br>
        </div>
        <div class="experienceFooter">
          <h2 class="experienceTech"> Worked with:</h2>
          <div class="TechWarper">
            <p >.NET</p>
          </div>
          <div class="TechWarper">
            <p>C#</p>
          </div>
          <div class="TechWarper">
            <p>WPF</p>
          </div>
          <div class="TechWarper">
            <p>Subversion</p>
          </div>
          <div class="TechWarper">
            <p>Microsoft Visual Studio</p>
          </div>
        </div>
      </div>
    );
    }
}
export default Experience;