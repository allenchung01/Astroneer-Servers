import React, { useEffect, useState } from "react";
import { getServer } from "../api/servers";
import "../Styles/ServerView.css";

export default function ServerView(props) {
  const id = props.match.params.id;

  const [server, setServer] = useState(null);

  useEffect(() => {
    console.log(id);
    getServer(
      id,
      (data) => {
        setServer(data[0]);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }, [id]);

  return (
    <div>
      {server ? (
        <div className="server-view">
          <h1>{server.server_name}</h1>
          <div id="flex-box-1">
            <div className="server-information-section">
              <h2 id="server-info-heading">Server Info</h2>
              <div id="column-1">
                <div className="information-field">
                  <h3 className="key">Status</h3>
                  <h3 className="value">
                    <span
                      className={
                        server.server_status ? "dot-green" : "dot-grey"
                      }
                    ></span>
                    {server.server_status ? "Online" : "Offline"}
                  </h3>
                </div>
                <div className="information-field">
                  <h3 className="key">Owner</h3>
                  <h3 className="value">{server.owner_name}</h3>
                </div>
                <div className="information-field">
                  <h3 className="key">Server Url</h3>
                  <h3 className="value">{server.server_url}</h3>
                </div>

                <div className="information-field">
                  <h3 className="key">Region</h3>
                  <h3 className="value">{server.server_region}</h3>
                </div>
              </div>
              <div id="column-2">
                <div className="information-field">
                  <h3 className="key">Server Type</h3>
                  <h3 className="value">{server.server_type}</h3>
                </div>
                <div className="information-field">
                  <h3 className="key">Game Mode</h3>
                  <h3 className="value">{server.server_game_mode}</h3>
                </div>
                <div className="information-field">
                  <h3 className="key">Password</h3>
                  <h3 className="value">
                    {server.server_password ? server.server_password : "N/A"}
                  </h3>
                </div>
              </div>
            </div>
            <div id="flex-box-2">
              <div className="server-description-section">
                <h2>Description</h2>
                <div className="information-field">
                  <h3 className="value">{server.server_description}</h3>
                </div>
              </div>
              <div className="server-rules-section">
                <h2>Rules</h2>
                <div className="information-field">
                  <h3 className="value">{server.server_rules}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
