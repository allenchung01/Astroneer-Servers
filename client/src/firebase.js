import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";

import store from "./redux/store.js";
import { updateUser } from "./redux/User/userActions";

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
  if (authUser) {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((idToken) => {
        axios.defaults.headers.common["Authorization"] = idToken;
      })
      .catch();
    store.dispatch(updateUser({ user: authUser }));
  } else {
    axios.defaults.headers.common["Authorization"] = null;
    store.dispatch(updateUser({ user: null }));
  }
});

export const auth = firebase.auth();
