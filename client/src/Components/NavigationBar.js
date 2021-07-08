import { Link } from "react-router-dom";
import React from "react";

import "../Styles/NavigationBar.css";

function NavigationBar() {
  return (
    <nav>
      <ul className="nav-bar">
        <div className="tabs">
          <li>HOME</li>
          <a href="https://astroneer.space/dedicatedserver/">
            <li>OFFICIAL SITE</li>
          </a>
          <li>MY SERVERS (COMING SOON)</li>
        </div>
        <div className="right-items">
          <Link className="nav-bar-button" to="/">
            Log In
          </Link>
          <Link className="nav-bar-button" to="/">
            Sign Up
          </Link>
          <h1>ASTRONEER-SERVERS.com</h1>
        </div>
      </ul>
    </nav>
  );
}

export default NavigationBar;
