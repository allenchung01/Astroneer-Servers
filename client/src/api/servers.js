import axios from "axios";

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

// Posts a server listing with the given information, and then executes the callback.
export const postServer = async (listing, callback) => {
  /*if (!auth.currentUser) {
    return;
  }*/
  //const token = await auth.currentUser.getIdToken();
  axios
    .post(
      "http://localhost:3001/api/servers",
      listing /*, {
      headers: { authorization: `Bearer ${token}` },
    }*/
    )
    .then((result) => {
      callback();
      console.log(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
