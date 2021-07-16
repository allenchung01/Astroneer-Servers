import React from "react";

import NavigationBar from "./NavigationBar.js";
import "../Styles/App.css";

function App(props) {
  return (
    <div className="App">
      <NavigationBar />
      {props.children}
      <div className="credits">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div className="credits">
        Icons made by{" "}
        <a href="" title="dDara">
          dDara
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}

export default App;
