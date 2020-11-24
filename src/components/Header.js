import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

function Header() {
  return (
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container"> <Link className="navbar-brand" to="/">
          Home
        </Link>

        <div class="container">
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
          {auth().currentUser ? (
                <ul class="navbar-nav ml-auto my-2 my-lg-0">
              <li class="nav-item">
              <Link className="navbar-brand" to="/profile">
                Settings
        </Link></li>
              <li class="nav-item"><button
                className="btn btn-secondary"
                onClick={() => auth().signOut()}
              >
                Logout
              </button></li>
              </ul>
          ) : (
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
              <li class="nav-item">
              <Link className="navbar-brand" to="/login">
              Sign In
              </Link></li>
              <li class="nav-item">
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
