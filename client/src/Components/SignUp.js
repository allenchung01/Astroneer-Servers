import React from "react";

import "../Styles/LogIn.css";

function SignUp() {
  return (
    <div className="log-in-page">
      <form>
        <h1>Sign Up</h1>
        <input placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="submit" />
      </form>
    </div>
  );
}
export default SignUp;
