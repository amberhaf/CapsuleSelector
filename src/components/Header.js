import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

function Header() {
  return (
    <nav className="background navbar navbar-expand-lg fixed-top py-3" id="mainNav">
    <div className="container"> <Link className="navbar-brand" to="/">
          Home
        </Link>

        <div className="container">
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
          {auth().currentUser ? (
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
          ) : (
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
              <Link className="navbar-brand" to="/login">
              Sign In
              </Link></li>
              <li className="nav-item">
              <Link className="navbar-brand" to="/signup">
              Sign Up
              </Link></li>
              </ul>
          )}
         </div>
        </div>
        </div>
      </nav>

  );
}

export default Header;
