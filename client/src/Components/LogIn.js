import React from "react";
import loginUser from "../firebase.js";

import "../Styles/LogIn.css";

function LogIn() {
  const onSubmit = () => {
    loginUser("test91240124@gmail.com", "Freak1234");
    console.log("Clicked Log In Button");
  };

  return (
    <div className="log-in-page">
      <form onSubmit={onSubmit}>
        <h1>Log In</h1>
        <input placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="button" onClick={onSubmit} />
      </form>
    </div>
  );
}

export default LogIn;
