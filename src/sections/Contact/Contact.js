import React, { useEffect, useState } from "react";
import "./Contact.css";
import { ModeContext } from "../../App";
import * as firebase from "firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onNameChanged = (event) => {
    setName(event.target.value);
  };

  const onEmailChanged = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChanged = (event) => {
    setMessage(event.target.value);
  };
  const onSent = (event) => {
    var messageSend = {
      name,
      email,
      message,
      date: Date(),
    };
    event.preventDefault();
    if (name === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Please enter your email");
    } else if (message === "") {
      alert("Please enter your message");
    } else {
      const messageDB = firebase.firestore().collection("Messages");
      messageDB
        .doc(Date.now().toString())
        .set(messageSend)
        .then(() => {
          console.log("Succeed");
          alert("Message successfully sent. I will reply as soon as possible!");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
        return (
          <div className="contact" id="contactSession" style={Wrapper}>
            <h1 className="header" style={textStyle}>
              {" "}
              Contact{" "}
            </h1>
            <p id="contactGreeting" style={textStyle} style={textStyle}>
              Feel free to contact me about anything. Leave your contact and
              message below :)
            </p>
            <form className="contact-form" onSubmit={onSent}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                onChange={onNameChanged}
                value={name}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your email address"
                onChange={onEmailChanged}
                value={email}
              />
              <textarea
                id="message"
                placeholder="What you want to say :)"
                rows="6"
                onChange={onMessageChanged}
                value={message}
              ></textarea>
              <div className="sendWarper">
                <button className="send-button" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        );
      }}
    </ModeContext.Consumer>
  );
}

export default Contact;
