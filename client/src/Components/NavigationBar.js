import { Link } from "react-router-dom";
import React from "react";

import "../Styles/NavigationBar.css";

function NavigationBar() {
  return (
    <nav>
      <ul className="nav-bar">
        <div className="tabs">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <a href="https://astroneer.space/dedicatedserver/">
            <li>OFFICIAL SITE</li>
          </a>
          <li>MY SERVERS (COMING SOON)</li>
        </div>
        <div className="right-items">
          <Link className="nav-bar-button" to="/log-in">
            Log In
          </Link>
          <Link className="nav-bar-button" to="/sign-up">
            Sign Up
          </Link>
          <Link className="nav-bar-title" to="/">
            ASTRONEER SERVERS
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default NavigationBar;
