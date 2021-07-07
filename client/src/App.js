import "./App.css";
import "./ServerListing.js";
import "./ServerListingForm.css";
import "./RoundedTriangle.css";
import React, { useState, useEffect } from "react";
import ServerListing from "./ServerListing";
import axios from "axios";

function App() {
  const [serverListings, setServerListings] = useState([]);
  const [serverName, setServerName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [serverDescription, setServerDescription] = useState("");

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
      server_description: serverDescription,
      server_status: true,
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
          <div className="triangle"></div>
          <h1>ASTRONEER-SERVER.COM</h1>
        </ul>
      </nav>
      <div className="main-content">
        <h1>Joinable Servers</h1>
        {serverListings.map((listing, index) => {
          return <ServerListing listing={listing} key={index} />;
        })}
        <form onSubmit={postServer}>
          <h1>Add a Server.</h1>
          <div className="inputs">
            <div className="left-inputs">
              <input
                onChange={(event) => {
                  setServerName(event.target.value);
                }}
                placeholder="server name"
                required
              ></input>
              <input
                onChange={(event) => {
                  setOwnerName(event.target.value);
                }}
                placeholder="owner name"
                required
              ></input>
              <input
                onChange={(event) => {
                  setIpAddress(event.target.value);
                }}
                placeholder="ip address"
                required
              ></input>
            </div>
            <div className="right-inputs">
              <textarea
                onChange={(event) => {
                  setServerDescription(event.target.value);
                }}
                placeholder="server description"
                required
              ></textarea>
            </div>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
