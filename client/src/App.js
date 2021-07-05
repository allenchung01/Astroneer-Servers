import "./App.css";
import "./ServerListing.js";
import React, { useState } from "react";
import ServerListing from "./ServerListing";

function App() {
  const [ServerListings, SetServerListings] = useState([
    { server_name: "Hound", owner_name: "John", ip_address: "5.62.127.170" },
  ]);

  return (
    <div className="App">
      <nav>
        <ul className="nav-bar">
          <div className="tabs">
            <li>SERVERS</li>
            <li>PAGE 2</li>
            <li>PAGE 3</li>
          </div>
          <h1>ASTRONEER SERVERS</h1>
        </ul>
      </nav>
      {ServerListings.map((listing, index) => {
        return <ServerListing listing={listing} id={index} />;
      })}
    </div>
  );
}

export default App;
