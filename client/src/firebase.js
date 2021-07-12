import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";

const config = {
  apiKey: "AIzaSyDdkkN7jp8H_P2fPLffNRxC3nLnmgYkbwE",
  authDomain: "astroneer-servers.firebaseapp.com",
  projectId: "astroneer-servers",
  storageBucket: "astroneer-servers.appspot.com",
  messagingSenderId: "1073001617795",
  appId: "1:1073001617795:web:2e49b84a7d64255d603eb6",
  measurementId: "G-5P60X3125R",
};

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(config);
  } catch (err) {
    console.log(err);
  }
}

firebase.auth().onAuthStateChanged((authUser) => {
  console.log("auth state did change");
  if (authUser) {
    return firebase
      .auth()
      .currentUser.getIdToken()
      .then((idToken) => {
        axios.defaults.headers.common["Authorization"] = idToken;
      })
      .catch();
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
});

export const auth = firebase.auth();
