import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link to="/timetable"> <input class="timetable" type="image" src="../Image/018-timetable.png" alt="Timetable" width="100"></input></Link>
        <Link to="/assignment"><input class="assignment" type="image" src="../Image/003-assignment.png" alt="Assignments" width="100" ></input></Link> 
        <Link to="/resources"><input class="setting" type="image" src="../Image/008-back to school.png" alt="Timetable" width="100" ></input></Link>
        <center><h2>Student Scheduler</h2>
        <p>Welcome to your personalised scheduler.<br></br>
          Here you can customise your timetable,<br></br>
          keep track of your assignments and access<br></br>
          a range of resources.
        </p>
        <br />
        </center>
      </div>
      
    );
  }
}
