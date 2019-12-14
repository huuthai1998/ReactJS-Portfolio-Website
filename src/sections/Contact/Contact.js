import React from "react";
import "./Contact.css";
import * as firebase from "firebase";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }
  onNameChanged = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChanged = event => {
    this.setState({ email: event.target.value });
  };

  onMessageChanged = event => {
    this.setState({ message: event.target.value });
  };
  onSent = event => {
    var message = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      date: Date()
    };
    event.preventDefault();
    if (this.state.name === "") {
      alert("Please enter your name");
    } else if (this.state.email === "") {
      alert("Please enter your email");
    } else if (this.state.message === "") {
      alert("Please enter your message");
    } else {
      const messageDB = firebase.firestore().collection("Messages");
      messageDB
        .doc(Date.now().toString())
        .set(message)
        .then(() => {
          console.log("Succeed");
          console.log(this.state.name);
          alert("Message successfully sent. I will reply as soon as possible!");
          this.setState({
            name: "",
            email: "",
            message: ""
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <div className="contact" id="contactSession">
        <h1 className="header"> Contact </h1>
        <p id="contactGreeting">
          Feel free to contact me about anything. Leave your contact and message
          below :)
        </p>
        <form className="contact-form" onSubmit={this.onSent}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            onChange={this.onNameChanged}
            value={this.state.name}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Your email address"
            onChange={this.onEmailChanged}
            value={this.state.email}
          />
          <textarea
            id="message"
            placeholder="What you want to say :)"
            rows="6"
            onChange={this.onMessageChanged}
            value={this.state.message}
          ></textarea>
          <div className="sendWarper">
            <button className="send-button" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Contact;
