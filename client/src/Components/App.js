import React, { useState } from "react";

import NavigationBar from "./NavigationBar.js";
import { auth } from "../firebase.js";

function App(props) {
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged(() => {
    setCurrentUser(auth.currentUser);
  });

  return (
    <div className="App">
      <NavigationBar currentUser={currentUser} />
      {props.children}
    </div>
  );
}

export default App;
