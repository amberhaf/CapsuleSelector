import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAL1zJXzrRRfStApML6k4MIqK1dmuz6Gco",
  authDomain: "schedule-dcd0d.firebaseapp.com",
  databaseURL: "https://schedule-dcd0d.firebaseio.com",
  projectId: "schedule-dcd0d",
  storageBucket: "schedule-dcd0d.appspot.com",
  messagingSenderId: "1031201795973",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
