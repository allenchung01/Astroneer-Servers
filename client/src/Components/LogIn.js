import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { loginUser } from "../firebase-auth.js";
import "../Styles/LogIn.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const onSubmit = () => {
    loginUser(email, password, (error) => {
      if (!error) {
        history.push("/");
      } else {
        setErrorMessage(error.message);
      }
    });
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
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          autoComplete="current-password"
        />
        {errorMessage ? (
          <h3 className="error-message">{errorMessage}</h3>
        ) : null}
        <input type="button" onClick={onSubmit} value="Log In" />
      </form>
    </div>
  );
}

export default LogIn;
