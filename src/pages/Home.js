import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
<<<<<<< HEAD
        <Link to="/Timetable"> <input class="timetable" type="image" src="../Image/018-timetable.png" alt="Timetable" width="100"></input></Link>
        <Link to="/assignment"><input class="assignment" type="image" src="../Image/003-assignment.png" alt="Assignments" width="100" ></input></Link> 
        <Link to="/resources"><input class="setting" type="image" src="../Image/008-back to school.png" alt="Timetable" width="100" ></input></Link>
        <center><h2 style="font-family: Times New Roman">Student Scheduler</h2>
=======
        <Link to="/Timetable"> <input className="timetable" type="image" src="../Image/018-timetable.png" alt="Timetable" width="100"></input></Link>
        <Link to="/assignment"><input className="assignment" type="image" src="../Image/003-assignment.png" alt="Assignments" width="100" ></input></Link> 
        <Link to="/resources"><input className="setting" type="image" src="../Image/008-back to school.png" alt="Timetable" width="100" ></input></Link>
        <center><h2>Student Scheduler</h2>
>>>>>>> 6f6f3e3cafd2c290bb9d97dfffaffab8eefaf437
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
