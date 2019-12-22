import React from 'react';
import style from "./Proficiency.module.css";

class Proficiency extends React.Component {
    render() {  
    return (
        <div className={style.proficiency} id="proficiencySession">
            <h1 className={style.header} id={style.headerProficiency}> Technical skills </h1>
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
                    </div>
                </div>
                <div>
                    <h2 className={style.otherTech}>Other Technologies</h2>
                    <div className={style.liWrapperOther}>
                    <li>ReactJS</li>
                    <li>Firebase</li>
                    <li>MySQL</li>
                    <li>Github</li>
                    <li>Subversion</li>
                    <li>UNIX</li>
                    <li>Adobe Photoshop</li>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}



export default Proficiency;