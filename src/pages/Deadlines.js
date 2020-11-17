import React, { Component } from "react";
import Header from "../components/HeaderTime&Assign";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
const Deadlines = () => (

  <div>
    <Header />
  <Dashboard module={false}/>
  </div>
);

export default Deadlines;