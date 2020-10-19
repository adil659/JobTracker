import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCNPCp8ABAiYLamnIiK5e-DgLozZyrNdt0",
    authDomain: "resume-tracker-954e8.firebaseapp.com",
    databaseURL: "https://resume-tracker-954e8.firebaseio.com",
    projectId: "resume-tracker-954e8",
    storageBucket: "resume-tracker-954e8.appspot.com",
    messagingSenderId: "837945684264",
    appId: "1:837945684264:web:7c558a15fe19739e1c601d",
    measurementId: "G-S6ZEE07CTN"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }