import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Resources = () => (
<div>
 <Header />
    <h1 >Resources</h1>
    <div ></div>
      
    <Link to="/Map"><button class="Map" class = "Mapbut"> Map </button></Link>
  <a target="_blank" href="https://www.maynoothuniversity.ie/moodle"><button class = "Moodlebut"> Moodle </button></a>
  <div></div>
 <a target="_blank" href="https://www.maynoothuniversity.ie/library"><button class = "Librarybut"> Library </button></a>
 <a target="_blank" href="https://www.maynoothuniversity.ie/coronavirus"><button class = "Coronabut"> Corona Info </button></a>
  <div></div>
    </div>
);

export default Resources;