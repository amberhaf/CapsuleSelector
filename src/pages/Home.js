import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
<section class="page-section bg-primary">
      <div class="container">
          <h2 class="text-center mt-0">Student Scheduler</h2>
        <p class="text-center mt-0">Welcome to your personalised scheduler.<br></br>
          Here you can customise your timetable,<br></br>
          keep track of your assignments and access<br></br>
          a range of resources.
        </p>
          <div class="row">
              <div class="col-md-6 col-lg-4 mb-5 text-center">
                  <div class="mt-5">
                  <Link to="/Timetable"> <input type="image" src="../Image/018-timetable.png" alt="Timetable" width="100"></input></Link>
                      <h3 class="h4 mb-2">Timetable</h3>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-5 text-center">
                  <div class="mt-5">
                  <Link to="/assignment"><input type="image" src="../Image/003-assignment.png" alt="Assignments" width="100" ></input></Link> 
                          <h3 class="h4 mb-2">Notes</h3>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 mb-5 text-center">
                  <div class="mt-5">
                  <Link to="/resources"><input type="image" src="../Image/008-back to school.png" alt="Timetable" width="100" ></input></Link>
                      <h3 class="h4 mb-2">Resources</h3>
                  </div>
              </div>
          </div>
          </div>
        </section>
        </div>
    );
  }
}
