import React, { Component } from "react";
import Header from "../components/HeaderTime&Assign";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
const Deadlines = () => (
  <div>
  <Header />
  <section className="page-section bg-primary">
  <div className="container color">
  <Dashboard module={false}/>
  </div>
   </section>
   <Footer />
   </div>
);

export default Deadlines;