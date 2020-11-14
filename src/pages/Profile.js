import React, { Component } from "react";
import Header from "../components/Header";
import { auth, /*db*/ } from "../services/firebase";

export default class Profile extends Component {

  render() {
    return (
      <div>
        <Header />
        <div id = "mx-4">
          <h1>
            Settings
          </h1>
        </div>
        <div class = "settingButton">
        Colour Theme
        </div>
        <div class = "settingButton">
          Change Password
        </div>
        <div class = "settingButton">
          Font
        </div>
      </div>
    );
  }
}
