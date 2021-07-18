import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./Components/App.js";
import Home from "./Components/Home.js";
import SignUp from "./Components/SignUp.js";
import LogIn from "./Components/LogIn.js";
import MyServers from "./Components/MyServers.js";
import ServerView from "./Components/ServerView.js";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App>
          <Route exact path="/" component={Home} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/servers" component={MyServers} />
          <Route exact path="/server/:id" component={ServerView} />
        </App>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
