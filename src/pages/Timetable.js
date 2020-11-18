import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
const Timetable = () => (

  <section className="page-section bg-primary">
  <div className="container">
    <Header />
  <Dashboard module={true}/>
  </div>
   </section>
);

export default Timetable;