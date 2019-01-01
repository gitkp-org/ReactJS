import React, { Component } from "react";
var firebase = require("firebase");
var uuid = require("uuid");

var config = {
  apiKey: "AIzaSyDN1OMuPEcadp3Wb1VKFERfTONwfvRrDkE",
  authDomain: "usurvey-d18fc.firebaseapp.com",
  databaseURL: "https://usurvey-d18fc.firebaseio.com",
  projectId: "usurvey-d18fc",
  storageBucket: "usurvey-d18fc.appspot.com",
  messagingSenderId: "74939808276"
};
firebase.initializeApp(config);

class Usurvey extends Component {
  nameHandler() {
    var studentName = this.refs.name.value;
    this.setState({ studentName: studentName }, () => {
      console.log(this.state);
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName: "",
      answers: {
        answer1: "",
        answer2: "",
        answer3: ""
      },
      isSubmitted: false
    };
    this.nameHandler = this.nameHandler.bind(this);
  }
  render() {
    var studentName;
    var questions;

    if (this.state.studentName === "" && this.state.isSubmitted === false) {
      studentName = (
        <div>
          <h1>Enter your Name!!</h1>
          <form onSubmit={this.nameHandler}>
            <input
              className="nameSt"
              type="text"
              placeholder="Enter Your Name."
              ref="name"
            />
          </form>
        </div>
      );
      questions = "";
    } else if (
      this.state.studentName !== "" &&
      this.state.isSubmitted === false
    ) {
      studentName = <h1>Welcome to Usurvey {this.state.studentName}</h1>;
      questions = (
        <div>
          <h2>Here are some Questions : </h2>
          <form />
        </div>
      );
    }
    return (
      <div>
        <h1>{studentName}</h1>
        -----------------------------------------------
        <h2>{questions}</h2>
      </div>
    );
  }
}

export default Usurvey;
