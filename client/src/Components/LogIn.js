import React from "react";

import "../Styles/LogIn.css";

function LogIn() {
  const onSubmit = () => {
    console.log("Clicked Log In Button");
  };

  return (
    <div className="log-in-page">
      <form onSubmit={onSubmit}>
        <h1>Log In</h1>
        <input placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogIn;
