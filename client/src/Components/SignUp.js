import React, { useState } from "react";

import { createUserAccount } from "../firebase-auth.js";
import "../Styles/LogIn.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = () => {
    if (password === confirmPassword) {
      createUserAccount(email, password);
    }
  };

  return (
    <div className="log-in-page">
      <form onSubmit={onSubmit}>
        <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="confirm password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <input type="button" onClick={onSubmit} value="Sign Up" />
      </form>
    </div>
  );
}
export default SignUp;
