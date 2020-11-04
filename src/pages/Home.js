import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link to="/dashboard"><button>Proposed timetable</button></Link>
        <Link to="/timetable"> <button class="timetable">Timetable</button> </Link>
        <Link to="/assignment"><button class="assignment"> Assignments </button></Link> 
        <Link to="/resources"><button class="setting">Resources</button></Link>
      </div>
    );
  }
}
