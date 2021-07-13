import React, { useState, useEffect } from "react";

import ServerListing from "./ServerListing";
import { getMyServers } from "../api/servers.js";

function MyServers(props) {
  const { user } = props;

  const [myServers, setMyServers] = useState([]);

  useEffect(
    getMyServers(user, (data) => {
      setMyServers(data);
    }),
    []
  );

  return (
    <div>
      {myServers.map((server) => {
        <ServerListing listing={server} />;
      })}
    </div>
  );
}

export default MyServers;
