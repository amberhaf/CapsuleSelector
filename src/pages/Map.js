import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Map = () => (
  <section class="page-section bg-primary" id="about">
  <div class="container">
     <Link to="/resources"><input class="back" type="image" src="../Image/back arrow.png" alt="Back" width="100" ></input></Link>    <Header />

    <h1>Map</h1>
    <img src="../Image/campusmap.jpg" id="map"/>
    </div>
  </section>
);

export default Map;