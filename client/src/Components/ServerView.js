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
          <p>{server.server_status ? "Online" : "Offline"}</p>
          <p>{server.owner_name}</p>
          <p>{server.server_url}</p>
          <p>{server.server_region}</p>
          <p>{server.server_type}</p>
          <p>{server.server_game_mode}</p>
          <p>{server.server_password}</p>
          <p>{server.server_description}</p>
          <p>{server.server_rules}</p>
        </div>
      ) : null}
    </div>
  );
}
