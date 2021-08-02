import firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/auth"
import "firebase/functions"

firebase.initializeApp ({
    apiKey: "AIzaSyDwO66y2ktpAdr432rvGWOm3ycasBL425Y",
    authDomain: "to-do-list-3cfb9.firebaseapp.com",
    projectId: "to-do-list-3cfb9",
    storageBucket: "to-do-list-3cfb9.appspot.com",
    messagingSenderId: "530828402332",
    appId: "1:530828402332:web:42f81006425514674dd759",
    measurementId: "G-7NWKY14VHW"
  }) 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const functions = firebase.functions();

  export default firebase;