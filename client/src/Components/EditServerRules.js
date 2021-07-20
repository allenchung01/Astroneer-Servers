import React, { useState } from "react";
import "../Styles/EditServerInfo.css";
import { updateServer } from "../api/servers";

function EditServerRules(props) {
  const { server, onCancel, onSave } = props;

  const [serverRules, setServerRules] = useState(server.server_rules);

  const handleCancelButton = () => {
    onCancel();
  };

  const handleSaveButton = () => {
    const listingUpdates = {
      server_rules: serverRules,
      server_description: server.server_description,
      server_status: server.server_status,
      owner_name: server.owner_name,
      server_url: server.server_url,
      server_region: server.server_region,
      server_type: server.server_type,
      server_game_mode: server.server_game_mode,
      server_password: server.server_password,
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
        <h1>Server Rules</h1>
        <div id="column-1">
          <div className="info-field">
            <h2>Rules</h2>
            <textarea
              onChange={(event) => {
                setServerRules(event.target.value);
              }}
              defaultValue={server.server_rules}
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

export default EditServerRules;
