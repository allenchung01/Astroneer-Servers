import axios from "axios";

//const url = "https://astroneer-servers.herokuapp.com";
//const url = "http://localhost:3001";

// Retrieves a list of all posted servers.
export const getServers = (setServerListings) => {
  axios
    .get("http://localhost:3001/api/servers")
    .then((response) => {
      setServerListings(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Retrieves a list of all servers posted by the given user
export const getMyServers = (uid, callback) => {
  axios
    .get("http://localhost:3001/api/servers/".concat(uid))
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Retrieve information from the specified server id.
export const getServer = (serverId, onSuccess, onFailure) => {
  axios
    .get("http://localhost:3001/api/server/".concat(serverId))
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((reason) => {
      onFailure(reason);
    });
};

// Posts a server listing with the given information, and then executes the callback.
export const postServer = async (listing, callback, onFailure) => {
  axios
    .post("http://localhost:3001/api/servers", listing)
    .then((result) => {
      callback();
    })
    .catch((error) => {
      onFailure();
    });
};

export const updateServer = (
  uid,
  server_id,
  listingUpdates,
  onSuccess,
  onFailure
) => {
  axios
    .put(
      `http://localhost:3001/api/servers/${uid}/${server_id}`,
      listingUpdates
    )
    .then((response) => {
      onSuccess(response);
    })
    .catch((reason) => {
      onFailure(reason);
    });
};

// Deletes the server with the specified server id.
export const deleteServer = (uid, server_id, onSuccess, onFailure) => {
  axios
    .delete(`http://localhost:3001/api/servers/${uid}/${server_id}`)
    .then((response) => {
      onSuccess(response);
    })
    .catch((reason) => {
      onFailure(reason);
    });
};
