import React, { Component } from "react";
import Header from "../components/Header";
import { auth, /*db*/ } from "../services/firebase";

export default class Profile extends Component {

  render() {
    return (
    <section className="page-section bg-primary" id="about">
      <div className="container">
        <Header />
        <div id = "mx-4">
          <h1 className="text-center">
            Settings
          </h1>
        </div>
        <div className = "settingButton">
        Colour Theme
        </div>
        <div className= "settingButton">
          Change Password
        </div>
        <div className= "settingButton">
          Font
        </div>
        </div>
      </section>
    );
  }
}
