import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./Components/App.js";
import Home from "./Components/Home.js";
import SignUp from "./Components/SignUp.js";
import LogIn from "./Components/LogIn.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/log-in" component={LogIn} />
        <Route exact path="/sign-up" component={SignUp} />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
