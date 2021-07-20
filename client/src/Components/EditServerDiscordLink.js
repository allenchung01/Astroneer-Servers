import React, { useState } from "react";
import "../Styles/EditServerInfo.css";
import { updateServer } from "../api/servers";

function EditServerDiscordLink(props) {
  const { server, onCancel, onSave } = props;

  const [discordLink, setDiscordLink] = useState(server.discord_link);

  const handleCancelButton = () => {
    onCancel();
  };

  const handleSaveButton = () => {
    const listingUpdates = {
      discord_link: discordLink,
      server_rules: server.server_rules,
      server_description: server.server_description,
      server_status: server.server_status,
      owner_name: server.owner_name,
      server_url: server.server_url,
      server_region: server.server_region,
      server_type: server.server_type,
      server_game_mode: server.server_game_mode,
      server_password: server.server_password,
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
        <h1>Server Links</h1>
        <div id="column-1">
          <div className="info-field">
            <h2>Discord</h2>
            <input
              onChange={(event) => {
                setDiscordLink(event.target.value);
              }}
              defaultValue={server.discord_link}
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

export default EditServerDiscordLink;
