import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
const Timetable = () => (

  <div>
    <Header />
  <Dashboard module={true}/>
  </div>
);

export default Timetable;