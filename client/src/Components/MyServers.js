import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import ServerListing from "./ServerListing";
import { getMyServers } from "../api/servers.js";
import "../Styles/MyServers.css";
import { deleteServer } from "../api/servers";
import store from "../redux/store.js";
import { updateTab } from "../redux/User/userActions";

function MyServers(props) {
  const { user } = props;

  const [myServers, setMyServers] = useState([]);

  useEffect(() => {
    store.dispatch(updateTab({ tab: "Servers" }));
  }, []);

  useEffect(() => {
    getMyServers(user?.uid, (data) => {
      setMyServers(data);
    });
    return () => setMyServers([]);
  }, [user]);

  const handleDeleteServer = (server_id) => {
    deleteServer(
      user.uid,
      server_id,
      (result) => {
        getMyServers(user?.uid, (data) => {
          setMyServers(data);
        });
      },
      (reason) => {
        console.log(reason);
      }
    );
  };

  return (
    <div className="my-servers">
      <h1>My Servers</h1>
      {myServers.map((server, id) => {
        return (
          <ServerListing listing={server} key={id}>
            <button
              className="delete-button"
              onClick={() => handleDeleteServer(server.id)}
            />
          </ServerListing>
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
