import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Timetable</a>
          <a class="dropdown-item" href="#">Assignments</a>
        </div>
      </li>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          {auth().currentUser ? (
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/profile">
                Setting
              </Link>
              <button
                className="btn btn-primary"
                onClick={() => auth().signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/login">
                Sign In
              </Link>
              <Link className="nav-item nav-link" to="/signup">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
