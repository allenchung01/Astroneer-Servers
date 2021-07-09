import React from "react";

import "../Styles/LogIn.css";

function LogIn() {
  return (
    <div className="log-in-page">
      <form>
        <h1>Log In</h1>
        <input placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogIn;
