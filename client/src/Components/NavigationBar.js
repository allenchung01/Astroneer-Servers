import "../Styles/NavigationBar.css";
import React from "react";

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
        <h1>ASTRONEER-SERVERS.com</h1>
      </ul>
    </nav>
  );
}

export default NavigationBar;
