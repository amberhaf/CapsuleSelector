import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

//navbar using bootstrap and authentication
function Header() {
  return (
      <nav className="background navbar-light navbar navbar-expand-lg fixed-top py-3" id="mainNav">
            <div className="container"> <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="container">
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                      <Link to="/timetable"><button className="btn btn-secondary buttons mr-3">
                      Timetable
              </button></Link>
              <Link to="/deadlines"><button className="btn btn-secondary buttons">
                      Deadlines
              </button></Link>
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
              <Link className="navbar-brand" to="/profile">
                Settings
        </Link></li>
              <li className="nav-item"><button
                className="btn btn-secondary"
                onClick={() => auth().signOut()}
              >
                Logout
              </button></li>
              </ul>
         </div>
        </div>
        </div>
      </nav>

  );
}

export default Header;
