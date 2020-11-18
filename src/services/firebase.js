import firebase from "firebase";
require('firebase/firestore');
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

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';
export const datab = firebase.firestore();
export const firebaseAuth = firebase.auth;
export const minTime = new Date();
minTime.setHours(9, 0, 0);
export const maxTime = new Date();
maxTime.setHours(18, 0, 0);
export const calendarInitialState = {
  events: [],
  modules: [],
  assignment: [],
  modal: {
    id: null,
    title: null,
    code: null,
    link: null,
    type: null,
    due: null,
    family: [],
    repeat: 1,
    colour: null,
    module: false,
    start: new Date(2018, 4, 4, 7, 0, 0),
    end: new Date(2018, 4, 4, 8, 0, 0),
  },
  modalOpen: false,
  modulesOpen: false,
  assignmentOpen: false,
}
