import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Map = () => (
  <div>
     <Link to="/resources"><input className="back" type="image" src="../Image/back arrow.png" alt="Back" width="100" ></input></Link>
      <h1>Map</h1>
    <img src="../Image/campusmap.jpg" className="map"/>
    <img src="../Image/roomCode.PNG" className="map"/>
    </div>
);

export default Map;