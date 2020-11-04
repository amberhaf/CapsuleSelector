import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Resources = () => (
<div>
 <Header />
    <h1 >Resources</h1>
    <div ></div>
      
    <Link to="/Map"><input class="Map" class = "Mapbut" type="image" src="../Image/002-map.png" alt="Map"></input></Link>
  <a target="_blank" href="https://www.maynoothuniversity.ie/moodle"><input class="Moodlebut" type="image" src="../Image/moodle.png" alt="Moodle" ></input></a>
  <div></div>
 <a target="_blank" href="https://www.maynoothuniversity.ie/library"><input class = "Librarybut" type="image" src="../Image/019-cloud library.png" alt="Library"></input></a>
 <a target="_blank" href="https://www.maynoothuniversity.ie/coronavirus"><input class = "Coronabut" type="image" src="../Image/soap.png" alt="Corona Info"></input></a>
  <div></div>
    </div>
);

export default Resources;