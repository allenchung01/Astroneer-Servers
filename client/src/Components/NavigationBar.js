import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

import "../Styles/NavigationBar.css";
import { signOutUser } from "../firebase-auth.js";

function NavigationBar(props) {
  const { user } = props;

  return (
    <nav>
      <ul className="nav-bar">
        <div className="tabs">
          <Link to="/">
            <li>Home</li>
          </Link>
          <a href="https://astroneer.space/dedicatedserver/">
            <li>Official Site</li>
          </a>
          {user ? (
            <Link to="/servers" user={user}>
              <li>My Servers</li>
            </Link>
          ) : null}
        </div>
        <div className="right-items">
          {user ? <h3>{user.email}</h3> : null}
          {user ? null : (
            <Link className="nav-bar-button" to="/log-in">
              Log In
            </Link>
          )}
          {user ? null : (
            <Link className="nav-bar-button" to="/sign-up">
              Sign Up
            </Link>
          )}
          {user ? (
            <button className="nav-bar-button" onClick={signOutUser}>
              Sign Out
            </button>
          ) : null}
          <Link className="nav-bar-title" to="/">
            Astroneer Servers
          </Link>
        </div>
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(NavigationBar);
