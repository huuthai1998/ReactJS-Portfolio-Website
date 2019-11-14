import React from 'react';
import "./Contact.css";
class Contact extends React.Component {
    render() {  
    return (
        <div class="contact">
        <h1 class="header"> Contact </h1>
        <p id="contactGreeting"> Feel free to contact me about anything. Leave your contact and message below :) </p>
        <form class="contact-form" method='POST' action="submission.html">
            <input type="text" name="name" id="name" placeholder="  Your name" />
            <input type="text" name="email" id="email" placeholder="  Your email address"/>
            <textarea id="message" placeholder=" What you want to say :)" rows="6"></textarea>
            <button class="send-button"> Send </button>
        </form>
      </div>
    );
    }
}
export default Contact;