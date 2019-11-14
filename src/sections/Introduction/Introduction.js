import React from 'react';
import "./Introduction.css";

class Introduction extends React.Component {
    render() {  
    return (
        <main class="information" id="introductionSession">
        <div class="basicInfo" >
            <h1 class="introduction"> Hi! I'm Thai Nguyen, <br/> a software developer. </h1>
          <h3 class="facts"> Here are some facts about me: </h3>
          <div class="facts-list">
          <li> Hometown: Ho Chi Minh city, Vietnam </li>
          <li> Currently live in: LA, California</li>
          <li> Education: Computer Science at UCSC </li>
          <li> Hobbies: Do Coding challenges, soccer, video games</li>
          </div>
          <a href="https://drive.google.com/file/d/1muQPT0PHQEWa7HsNyd2IiiBfVym05PlX/view?usp=sharing" target="_blank"><button class="resume"> My Resume </button></a>
        </div>
        <div class="profilePicture">
          <img class="slideshow" src="https://lh3.googleusercontent.com/j_NknsA0N0bsvHxZsBqrG_4d8aknP4Bbb20fZCMPlLNr4FpVpJ5KQaHDZxs7xEdXuyJe7rPsKA=w328-h409-no" alt="My profile"/>
        </div>
      </main>
    );
    }
}
 
export default Introduction;