import "./App.css";
import "./ServerListing.js";
import React, { useState, useEffect } from "react";
import ServerListing from "./ServerListing";
import axios from "axios";

function App() {
  const [ServerListings, SetServerListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/servers")
      .then((response) => {
        SetServerListings(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        return <ServerListing listing={listing} key={index} />;
      })}
    </div>
  );
}

export default App;
