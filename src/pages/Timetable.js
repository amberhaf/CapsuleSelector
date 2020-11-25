import React, { Component } from "react";
import Header from "../components/HeaderTime&Assign.js";
import Footer from "../components/Footer.js";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
const Timetable = () => (
  <div>
  <Header />
  <section className="page-section bg-primary">
  <div className="container color">
  <Dashboard module={true}/>
  </div>
   </section>
   <Footer />
   </div>
);

export default Timetable;