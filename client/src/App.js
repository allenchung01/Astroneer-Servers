import "./App.css";
import "./ServerListing.js";
import React, { useState, useEffect } from "react";
import ServerListing from "./ServerListing";
import axios from "axios";

function App() {
  const [serverListings, setServerListings] = useState([]);
  const [serverName, setServerName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/servers")
      .then((response) => {
        setServerListings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const postServer = () => {
    const listing = {
      server_name: serverName,
      owner_name: ownerName,
      ip_address: ipAddress,
    };
    axios
      .post("http://localhost:5000/api/servers", listing)
      .then((result) => {
        setServerListings([...serverListings, listing]);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      {serverListings.map((listing, index) => {
        return <ServerListing listing={listing} key={index} />;
      })}
      <div className="form">
        <h3>Server Name</h3>
        <input
          onChange={(event) => {
            setServerName(event.target.value);
          }}
        ></input>
        <h3>Owner Name</h3>
        <input
          onChange={(event) => {
            setOwnerName(event.target.value);
          }}
        ></input>
        <h3>IP Address</h3>
        <input
          onChange={(event) => {
            setIpAddress(event.target.value);
          }}
        ></input>
        <button onClick={postServer}>Submit</button>
      </div>
    </div>
  );
}

export default App;
