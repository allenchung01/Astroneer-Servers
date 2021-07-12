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

const createUserAccount = (data) => {
  axios
    .post("http://localhost:3001/api/users/sign-up", data)
    .then((res) => res.data);
};

const loginUser = (email, password) => {
  console.log(email);
  console.log(password);
  console.log("loginUser()");
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default loginUser;
export const auth = firebase.auth();
