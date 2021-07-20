import React, { useState } from "react";
import "../Styles/EditServerInfo.css";
import { updateServer } from "../api/servers";

function EditServerDescription(props) {
  const { server, onCancel, onSave } = props;

  const [serverDescription, setServerDescription] = useState(
    server.server_description
  );

  const handleCancelButton = () => {
    onCancel();
  };

  const handleSaveButton = () => {
    const listingUpdates = {
      server_description: serverDescription,
      server_status: server.server_status,
      owner_name: server.owner_name,
      server_url: server.server_url,
      server_region: server.server_region,
      server_type: server.server_type,
      server_game_mode: server.server_game_mode,
      server_password: server.server_password,
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
        <h1>Server Description</h1>
        <div id="column-1">
          <div className="info-field">
            <h2>Description</h2>
            <textarea
              onChange={(event) => {
                setServerDescription(event.target.value);
              }}
              defaultValue={server.server_description}
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

export default EditServerDescription;
