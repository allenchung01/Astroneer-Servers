import React, { useState } from "react";

import { postServer } from "../api/servers";
import "../Styles/AddServerForm.css";

function AddServerForm(props) {
  const { serverListings, setServerListings } = props;

  const [serverName, setServerName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [serverUrl, setServerUrl] = useState("");
  const [serverDescription, setServerDescription] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {
    const listing = {
      server_name: serverName,
      owner_name: ownerName,
      server_url: serverUrl,
      server_description: serverDescription,
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
              setServerUrl(event.target.value);
            }}
            placeholder="server url"
            required
          ></input>
        </div>
        <div className="right-inputs">
          <textarea
            onChange={(event) => {
              setServerDescription(event.target.value);
            }}
            placeholder="server description..."
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
