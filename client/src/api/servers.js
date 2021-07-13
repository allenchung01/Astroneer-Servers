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
    .get("http://localhost:3001/api/servers", {
      params: {
        uid: uid,
      },
    })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Posts a server listing with the given information, and then executes the callback.
export const postServer = async (listing, callback) => {
  axios
    .post("http://localhost:3001/api/servers", listing)
    .then((result) => {
      callback();
      console.log(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
