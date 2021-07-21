import axios from "axios";

// Creates a user entry in the PostgreSQL database
// that stores the user's username and uid.
export const createUser = async (username, user_uid) => {
  try {
    let user = {
      username: username,
      user_uid: user_uid,
    };
    const response = await axios.post("http://localhost:3001/api/users", user);
    return response;
  } catch (error) {
    throw error;
  }
};

// Get the user entry corresponding to the given user_uid.
export const getUser = async (user_uid) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/users/${user_uid}`
    );
    return response.data[0].username;
  } catch (error) {
    throw error;
  }
};
