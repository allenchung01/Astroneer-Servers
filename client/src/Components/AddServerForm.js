import React from "react";

import "../Styles/AddServerForm.css";

function AddServerForm(props) {
  const {
    postServer,
    setServerName,
    setOwnerName,
    setServerUrl,
    setServerDescription,
  } = props;

  return (
    <form onSubmit={postServer}>
      <h1>Add a Server</h1>
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
      <input type="submit"></input>
    </form>
  );
}

export default AddServerForm;
