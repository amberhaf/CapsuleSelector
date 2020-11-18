import React, { Component } from 'react';
// import context
import { ProfilerConsumer } from '../../context/profileContext'
// import components
import { auth } from '../../services/firebase';
import Calendar from './Calendar'
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: auth().currentUser
    };
  }
  render() {
    return (
      <ProfilerConsumer value={this.state.user}>
        {context => {
            return (
              <div>
                <div className="text-center">
                <button className="btn btn-primary buttons"><Link to="/timetable">
                Timetable
        </Link></button>
                <button className="btn btn-primary buttons"><Link to="/deadlines">
                Deadlines
        </Link></button>
              </div>
               <Calendar uid={this.state.user.uid} module={this.props.module}/> 
              </div>
            )
        }}
      </ProfilerConsumer>
    )
  }

}

export default (Dashboard);
