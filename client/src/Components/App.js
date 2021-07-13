import React, { useState } from "react";

import NavigationBar from "./NavigationBar.js";
import { auth } from "../firebase.js";

function App(props) {
  return (
    <div className="App">
      <NavigationBar />
      {props.children}
    </div>
  );
}

export default App;
