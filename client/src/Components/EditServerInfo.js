import React, { useState } from "react";
import "../Styles/EditServerInfo.css";
import ToggleOnlineOffline from "./ToggleOnlineOffline.js";
import { updateServer } from "../api/servers";

function EditServerInfo(props) {
  const { server, onCancel, onSave } = props;

  const [serverStatus, setServerStatus] = useState(server.server_status);
  const [serverOwner, setServerOwner] = useState(server.owner_name);
  const [serverUrl, setServerUrl] = useState(server.server_url);
  const [serverRegion, setServerRegion] = useState(server.server_region);
  const [serverType, setServerType] = useState(server.server_type);
  const [serverGameMode, setServerGameMode] = useState(server.server_game_mode);
  const [serverPassword, setServerPassword] = useState(server.server_password);

  const handleCancelButton = () => {
    onCancel();
  };

  const handleSaveButton = () => {
    const listingUpdates = {
      server_status: serverStatus,
      owner_name: serverOwner,
      server_url: serverUrl,
      server_region: serverRegion,
      server_type: serverType,
      server_game_mode: serverGameMode,
      server_password: serverPassword,
      server_description: server.server_description,
      server_rules: server.server_rules,
      discord_link: server.discord_link,
    };
    updateServer(
      server.user_uid,
      server.id,
      listingUpdates,
      () => {
        onSave();
      },
      (reason) => {
        console.log(reason.message);
      }
    );
  };

  return (
    <div className="edit-server-info">
      <div className="edit-server-card">
        <h1>Server Info</h1>
        <div id="column-1">
          <div className="info-field">
            <h2>Status</h2>
            <ToggleOnlineOffline
              selectedButton={serverStatus}
              updateServerStatus={setServerStatus}
            />
          </div>
          <div className="info-field">
            <h2>Owner</h2>
            <input
              defaultValue={server.owner_name}
              onChange={(event) => {
                setServerOwner(event.target.value);
              }}
            />
          </div>
          <div className="info-field">
            <h2>Server Url</h2>
            <input
              defaultValue={server.server_url}
              onChange={(event) => {
                setServerUrl(event.target.value);
              }}
            />
          </div>
          <div className="info-field">
            <h2>Region</h2>
            <input
              defaultValue={server.server_region}
              onChange={(event) => {
                setServerRegion(event.target.value);
              }}
            />
          </div>
        </div>
        <div id="column-2">
          <div className="info-field">
            <h2>Server Type</h2>
            <input
              defaultValue={server.server_type}
              onChange={(event) => {
                setServerType(event.target.value);
              }}
            />
          </div>
          <div className="info-field">
            <h2>Game Mode</h2>
            <input
              defaultValue={server.server_game_mode}
              onChange={(event) => {
                setServerGameMode(event.target.value);
              }}
            />
          </div>
          <div className="info-field">
            <h2>Password</h2>
            <input
              defaultValue={server.server_password}
              onChange={(event) => {
                setServerPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="cancel-and-save-changes">
          <button id="cancel-button" onClick={handleCancelButton}>
            Cancel
          </button>
          <button id="save-button" onClick={handleSaveButton}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditServerInfo;
