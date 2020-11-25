import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth, /*db*/ } from "../services/firebase";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
export default class Profile extends Component {

  render() {
    return (
      <div>
        <Header />
        <section className="page-section bg-primary" id="about">
        <div className="container">
        <div id = "mx-4">
          <h1 className="text-center">
            Settings
          </h1>
        </div>
        <div className = "settingButton">
        <Link to = "/Forgot"><Button variant="warning" size="lg" block>
          Change Password
        </Button></Link>
        <br></br>
        </div>
        <Link to = "/DeleteAccount"><Button variant="danger" size="lg" block>
          Delete Account
        </Button></Link>
        </div>
  </section>
  <Footer />
      </div>
    );
  }
}
