import React from 'react';
import "./Proficiency.css";
class Proficiency extends React.Component {
    render() {  
    return (
        <div className="proficiency" id="proficiencySession">
            <h1 className="header" id="header-proficiency"> Technical skills </h1>
            <div className="ListProficiency">
                <div>
                    <h2>Programming languages</h2>
                    <li>C++</li>
                    <li>C#</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>HTML/CSS/Javascript</li>
                </div>
                <div>
                    <h2>Other Technologies</h2>
                    <li>ReactJS</li>
                    <li>MySQL</li>
                    <li>Github</li>
                    <li>Subversion</li>
                    <li>UNIX</li>
                    <li>Adobe Photoshop</li>
                </div>
            </div>
        </div>
    );
    }
}



export default Proficiency;