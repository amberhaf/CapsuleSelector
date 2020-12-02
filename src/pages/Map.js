import React from "react";

import { Link } from "react-router-dom";

const Map = () => (
  <div>
     <Link to="/resources"><input className="back"  type="image" src="../Image/back arrow.png" alt="Back" width="100" ></input></Link>
      <h1>Map</h1>
    <img src="../Image/campusmap.jpg" alt="Map" className="map"/>
    <img src="../Image/roomCode.PNG" alt="Room code" className="map"/>
    </div>
);

export default Map;