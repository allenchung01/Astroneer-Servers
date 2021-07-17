import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import "../Styles/NavigationBar.css";
import { signOutUser } from "../firebase-auth.js";
import HamburgerMenu from "./HamburgerMenu";

function NavigationBar(props) {
  const { user, tab } = props;

  const history = useHistory();

  const handleSignOut = () => {
    signOutUser();
    history.push("/");
  };

  const isTabSelected = (tabName) => {
    if (tab === tabName) {
      return true;
    }
    return false;
  };

  return (
    <nav>
      <ul className="nav-bar">
        <HamburgerMenu>
          <Link to="/">
            <li className={isTabSelected("Home") ? "tab-selected" : null}>
              Home
            </li>
          </Link>
          <a href="https://astroneer.space/dedicatedserver/">
            <li>Official Site</li>
          </a>
          {user ? (
            <Link to="/servers" user={user}>
              <li className={isTabSelected("Servers") ? "tab-selected" : null}>
                My Servers
              </li>
            </Link>
          ) : null}
        </HamburgerMenu>
        <div className="tabs">
          <Link to="/">
            <li className={isTabSelected("Home") ? "tab-selected" : null}>
              Home
            </li>
          </Link>
          <a href="https://astroneer.space/dedicatedserver/">
            <li>Official Site</li>
          </a>
          {user ? (
            <Link to="/servers" user={user}>
              <li className={isTabSelected("Servers") ? "tab-selected" : null}>
                My Servers
              </li>
            </Link>
          ) : null}
        </div>
        <div className="right-items">
          {user ? (
            <div id="profile-info">
              <div id="astronaut" />
              <h3 id="email">{user.email}</h3>
            </div>
          ) : null}
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
            <button className="nav-bar-button" onClick={handleSignOut}>
              Sign Out
            </button>
          ) : null}
        </div>
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tab: state.tab,
  };
};

export default connect(mapStateToProps)(NavigationBar);
