import { auth } from "./firebase.js";

export const createUserAccount = (email, password, callback) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      callback();
    })
    .catch((error) => {
      callback(error);
    });
};

export const loginUser = (email, password, callback) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      callback();
    })
    .catch((error) => {
      callback(error);
    });
};

export const signOutUser = () => {
  auth
    .signOut()
    .then(() => {
      console.log("Signed Out");
    })
    .catch((error) => {
      console.log(error);
    });
};
