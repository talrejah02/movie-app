import firebase from 'firebase/app';
import 'firebase/firebase-firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCXdI9gH3fqcb0IILfOotrkpmCzkVReID0",
    authDomain: "movie-app-c682f.firebaseapp.com",
    projectId: "movie-app-c682f",
    storageBucket: "movie-app-c682f.appspot.com",
    messagingSenderId: "205257168875",
    appId: "1:205257168875:web:6a3919725303fba2856bae",
    measurementId: "G-B0LQ3S1Z6K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 export const firestore=firebase.firestore();