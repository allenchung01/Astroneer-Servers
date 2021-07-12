import { auth } from "./firebase.js";

export const createUserAccount = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const loginUser = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error.message);
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
