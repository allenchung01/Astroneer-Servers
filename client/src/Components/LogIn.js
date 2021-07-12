import React, { useState } from "react";

import { loginUser } from "../firebase-auth.js";
import "../Styles/LogIn.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    loginUser(email, password);
  };

  return (
    <div className="log-in-page">
      <form>
        <h1>Log In</h1>
        <input
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
        <input type="button" onClick={onSubmit} value="Log In" />
      </form>
    </div>
  );
}

export default LogIn;
