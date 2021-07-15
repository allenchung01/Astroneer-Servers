import React, { useState } from "react";

import { postServer } from "../api/servers";
import "../Styles/AddServerForm.css";

function AddServerForm(props) {
  const { serverListings, setServerListings } = props;

  const [serverName, setServerName] = useState("");
  const [serverPassword, setServerPassword] = useState("");
  const [serverType, setServerType] = useState("");
  const [serverRegion, setServerRegion] = useState("");
  const [serverUrl, setServerUrl] = useState("");
  const [serverGameMode, setServerGameMode] = useState("");
  const [serverDescription, setServerDescription] = useState("");
  const [serverRules, setServerRules] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {
    const listing = {
      server_name: serverName,
      server_url: serverUrl,
      server_password: serverPassword,
      server_type: serverType,
      server_region: serverRegion,
      server_description: serverDescription,
      server_rules: serverRules,
      server_game_mode: serverGameMode,
      server_status: true,
    };
    postServer(
      listing,
      () => {
        setServerListings([...serverListings, listing]);
        setError("");
      },
      () => {
        setError("Failed to post server.");
      }
    );
  };

  return (
    <form>
      <h1 className="add-a-server">Add a Server</h1>
      <div className="inputs">
        <div className="left-inputs">
          <input
            onChange={(event) => {
              setServerName(event.target.value);
            }}
            placeholder="Server Name"
            id="server-name"
            required
          ></input>
          <h3>Server Url</h3>
          <input
            onChange={(event) => {
              setServerUrl(event.target.value);
            }}
            placeholder="12.34.56.78:9999"
            required
          ></input>
          <h3>Server Password</h3>
          <input
            onChange={(event) => {
              setServerPassword(event.target.value);
            }}
            placeholder="password"
            required
          ></input>
          <h3>Server Type</h3>
          <input
            onChange={(event) => {
              setServerType(event.target.value);
            }}
            placeholder="Nitrado"
            required
          ></input>
          <h3>Server Region</h3>
          <input
            onChange={(event) => {
              setServerRegion(event.target.value);
            }}
            placeholder="NA East"
            required
          ></input>
          <h3>Game Mode</h3>
          <input
            onChange={(event) => {
              setServerGameMode(event.target.value);
            }}
            placeholder="Adventure"
            required
          ></input>
        </div>
        <div className="right-inputs">
          <h2>Description</h2>
          <textarea
            onChange={(event) => {
              setServerDescription(event.target.value);
            }}
            placeholder="Server description..."
            required
          ></textarea>
          <h2>Rules</h2>
          <textarea
            onChange={(event) => {
              setServerRules(event.target.value);
            }}
            placeholder="Rule 1:..."
            required
          ></textarea>
        </div>
      </div>
      {error ? <h3 className="error-message">{error}</h3> : null}
      <input type="button" onClick={onSubmit} value="Add Server" />
    </form>
  );
}

export default AddServerForm;
