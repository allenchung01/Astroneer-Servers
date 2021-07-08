import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./Components/App.js";
import Home from "./Components/Home.js";
import SignUp from "./Components/SignUp.js";
import SignIn from "./Components/SignIn.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Route path="/" component={Home} />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
