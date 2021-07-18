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
    <div className="server-view">
      {server ? (
        <div>
          <h1>{server.server_name}</h1>
          <div className="server-information">
            <h2>{server.server_status ? "Online" : "Offline"}</h2>
            <h2>{server.owner_name}</h2>
            <h2>{server.server_url}</h2>
            <h2>{server.server_region}</h2>
            <h2>{server.server_type}</h2>
            <h2>{server.server_game_mode}</h2>
            <h2>{server.server_password}</h2>
            <h2>{server.server_description}</h2>
            <h2>{server.server_rules}</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
