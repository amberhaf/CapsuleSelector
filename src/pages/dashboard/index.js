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
              <div className="calendar text-center col">
               <Calendar uid={this.state.user.uid} module={this.props.module}/> 
              </div>
            )
        }}
      </ProfilerConsumer>
    )
  }

}

export default (Dashboard);
