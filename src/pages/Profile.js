import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth, db } from "../services/firebase";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: auth().currentUser
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="mx-4">
          Login in as: <strong>{this.state.user.email}</strong>
        </div>
      </div>
    );
  }
}
