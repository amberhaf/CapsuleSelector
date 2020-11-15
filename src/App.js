import React, { Component } from 'react';
import {
  Route, BrowserRouter as Router, Switch, Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Assignment from './pages/Assignment';
import Setting from './pages/Setting';
import Mapping from './pages/Map';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Timetable from './pages/Timetable';
import Deadlines from './pages/Deadlines';
import Resources from './pages/Resources';
import { auth } from './services/firebase';
import { Forgot } from './pages/Forgot';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/profile' />}
    />
  )
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }

  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute path="/profile" authenticated={this.state.authenticated} component={Profile}></PrivateRoute>
          <PrivateRoute path="/assignment" authenticated={this.state.authenticated} component={Assignment}></PrivateRoute>
          <PrivateRoute path="/Timetable" authenticated={this.state.authenticated} component={Timetable}></PrivateRoute>
          <PrivateRoute path="/setting" authenticated={this.state.authenticated} component={Setting}></PrivateRoute>
          <PrivateRoute path="/map" authenticated={this.state.authenticated} component={Mapping}></PrivateRoute>
          <PrivateRoute path="/resources" authenticated={this.state.authenticated} component={Resources}></PrivateRoute>
          <PrivateRoute path="/dashboard" authenticated={this.state.authenticated} component={Dashboard}></PrivateRoute>
          <PrivateRoute path="/deadlines" authenticated={this.state.authenticated} component={Deadlines}></PrivateRoute>

          <Route exact path = "/forgot" component={Forgot}></Route>
          <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
        </Switch>
      </Router>
    );
  }
}

export default App;
