import React, { useState } from "react";
import { connect } from "react-redux";

import { getServers, postServer } from "../api/servers";
import InputRequired from "./InputRequired";
import ToggleGameMode from "./ToggleGameMode";
import ToggleServerType from "./ToggleServerType";
import "../Styles/AddServerForm.css";
import { getUser } from "../api/users";

function AddServerForm(props) {
  const { serverListings, setServerListings } = props;

  const [serverName, setServerName] = useState("");
  const [serverPassword, setServerPassword] = useState("");
  const [serverType, setServerType] = useState("Nitrado");
  const [serverRegion, setServerRegion] = useState("");
  const [serverUrl, setServerUrl] = useState("");
  const [serverGameMode, setServerGameMode] = useState("Adventure");
  const [serverDescription, setServerDescription] = useState("");
  const [serverRules, setServerRules] = useState("");
  const [error, setError] = useState("");

  const updateServerType = (type) => {
    setServerType(type);
  };

  const updateServerGameMode = (type) => {
    setServerGameMode(type);
  };

  const areRequiredFieldsFilled = () => {
    if (!serverName) {
      setError("Please enter a server name.");
      return false;
    } else if (!serverUrl) {
      setError("Please enter a server url.");
      return false;
    } else if (!serverType) {
      setError("Please enter a server type.");
      return false;
    } else if (!serverRegion) {
      setError("Please enter a server region.");
      return false;
    } else if (!serverGameMode) {
      setError("Please enter a server game mode.");
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (!areRequiredFieldsFilled()) {
      return;
    }
    if (props.user === null) {
      return;
    }
    try {
      const username = await getUser(props.user.uid);
      console.log(username);
      const listing = {
        server_name: serverName,
        owner_name: username,
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
          getServers(setServerListings);
          //setServerListings([listing, ...serverListings]);
          setError("");
        },
        () => {
          setError("Failed to post server.");
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <h1 id="add-a-server">Add a Server</h1>
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
          <InputRequired input={serverUrl}>
            <h3>Server Url</h3>
          </InputRequired>
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
          <ToggleServerType
            selectedButton={serverType}
            updateServerType={updateServerType}
          />
          <InputRequired input={serverRegion}>
            <h3>Server Region</h3>
          </InputRequired>
          <input
            onChange={(event) => {
              setServerRegion(event.target.value);
            }}
            placeholder="NA East"
            required
          ></input>
          <h3>Game Mode</h3>
          <ToggleGameMode
            selectedButton={serverGameMode}
            updateServerGameMode={updateServerGameMode}
          />
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
        <input type="button" onClick={onSubmit} value="Add Server" />
      </div>
      {error ? <h3 className="error-message">{error}</h3> : null}
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(AddServerForm);
