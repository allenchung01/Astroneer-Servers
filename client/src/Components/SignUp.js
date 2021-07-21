import React, { useEffect, useImperativeHandle, useState } from "react";
import { useHistory } from "react-router-dom";

import { createUserAccount } from "../firebase-auth.js";
import "../Styles/LogIn.css";
import store from "../redux/store.js";
import { updateTab } from "../redux/User/userActions";
import { createUser } from "../api/users";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");

  const history = useHistory();

  useEffect(() => {
    store.dispatch(updateTab({ tab: "SignUp" }));
  }, []);

  const handleCreateUser = async (uid) => {
    try {
      const response = await createUser(username, uid);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = () => {
    if (password === confirmPassword) {
      createUserAccount(
        email,
        password,
        (uid) => {
          history.push("/");
          handleCreateUser(uid);
        },
        (error) => {
          setErrorMessage(error.message);
        }
      );
    } else {
      setErrorMessage("Passwords do not match.");
    }
  };

  return (
    <div className="log-in-page">
      <form>
        <h1>Sign Up</h1>
        <input
          type="username"
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          autoComplete="username"
        />
        <input
          type="email"
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
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="confirm password"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          autoComplete="new-password"
        />
        {errorMessage ? (
          <h3 className="error-message">{errorMessage}</h3>
        ) : null}
        <input type="button" onClick={onSubmit} value="Sign Up" />
      </form>
    </div>
  );
}
export default SignUp;
