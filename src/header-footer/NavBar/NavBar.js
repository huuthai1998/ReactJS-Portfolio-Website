import React from 'react';
import "./NavBar.css";

class NavBar extends React.Component {
    render() {  
    return (
      <nav class="topNav">
          <img id="logo" src="https://lh3.googleusercontent.com/ftD7ebgWP4JnSqJg2ccywje4EtuBhXSBxDB6lF8IhxdI_1T3gBqhuYz_1XVO3AJRMymfsY7nAKh4WojY8lCInBkq25c3GfdHYntiI5E1CpqrCoUhvTq47XGFZSgBZ84Rf-NC-Iem3FiNVJpDDgfzCe85MkfvU_Icr00I2J2-dpwX65nbEmAdfEoeNNIBfWB7p8ypNAX0PtT68XAGra9pkoWtaGyx2SG80wmSlhyynWxKxFe-hAVk_ZgXbqBxBsiyZYpaOGeyX8JsRmCsoq9EgVfPiMy4mx7WYu03cJENquWE-zATF17VXepsCzXNSI628XeGcuqhLQTAIFuRacBiAw9Xj3dffFxsMO1hcTzzINYhTcjXomty__FQFSQCj8tNE_qlHk9PzFb6tN6QD3IUcY6u0VClXyIah4tY9CeTcwjy8P09ShZ3F0CLrCzNzNIizuFnD2Kw179wpyBBsSBTo0KDg7KKfCU2atm_j655WtByfGpiphrFiHLRA5xidsgCUG2Brvm9obkMpMJWvoe-vgVvaY4ZfthkPcLGrvDkUBnk6XqlmFTC0kOZMkB4dXE3uLFU9fVhm238tKQCbi14t4wodSnWhRTiGjWDGqcOi90T602tqN1LJwQe2kr7AbEuTIXDi7QVE1Si6y207xmOq_eZbktTaB8d-mtRhk_h1Qc4gl1X5JbOpV8fwjr3nf71IBNHHvmO36JR35JQy-kIIyUx=s814-no"
           alt="My logo"/>
        <div id="blankNavBar">
        </div>
        <div class="topButtons">
          <a class="topButtons" id="aboutButton" href="#information"> About </a>
          <a class="topButtons" id="experienceButton" href="#experience"> Experience </a>
          <a class="topButtons" id="codingProficiencyButton" href="#proficiency"> Coding proficiency </a>
          <a class="topButtons" id="contactButton" href="#contact"> Contact </a>
        </div>
      </nav>
    );
    }
}
export default NavBar;