import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import ServerListing from "./ServerListing";
import { getMyServers } from "../api/servers.js";
import "../Styles/MyServers.css";

function MyServers(props) {
  const { user } = props;

  const [myServers, setMyServers] = useState([]);

  useEffect(() => {
    getMyServers(user?.uid, (data) => {
      setMyServers(data);
    });
    return () => setMyServers([]);
  }, [user]);

  return (
    <div className="my-servers">
      <h1>My Servers</h1>
      {myServers.map((server, id) => {
        return (
          <div key={id}>
            <ServerListing listing={server}>
              <button className="delete-button" />
            </ServerListing>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(MyServers);
