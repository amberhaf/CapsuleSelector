import React, { Component } from 'react';
// import context
import { ProfilerConsumer } from '../../context/profileContext'
// import components
import { auth } from '../../services/firebase';
import Calendar from './Calendar'

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
               <div><strong>Scheduler: {this.state.user.email}</strong></div>
               <Calendar uid={this.state.user.uid} /> 
              </div>
            )
        }}
      </ProfilerConsumer>
    )
  }

}

export default (Dashboard);
