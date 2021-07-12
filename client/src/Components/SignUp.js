import React from "react";

import "../Styles/LogIn.css";

function SignUp() {
  const onSubmit = () => {
    console.log("onSubmit() got called");
  };

  return (
    <div className="log-in-page">
      <form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <input type="email" placeholder="email" />
        <input placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <input type="submit" />
      </form>
    </div>
  );
}
export default SignUp;
