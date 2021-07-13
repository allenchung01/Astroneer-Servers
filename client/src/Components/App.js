import React from "react";

import NavigationBar from "./NavigationBar.js";

function App(props) {
  return (
    <div className="App">
      <NavigationBar />
      {props.children}
    </div>
  );
}

export default App;
