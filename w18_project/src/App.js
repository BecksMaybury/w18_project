import React from "react";
import {useState} from "react";
import Input from "../src/Components/Input/input"
import List from "../src/Components/List/list.js"
import {useAuthState} from "react-firebase-hooks/auth"
import {auth, firestore} from './firebase';
import SignInButton from "./Components/SignIn/signIn";
import firebase from './firebase';
import {useEffect} from 'react';
import './App.css';
import FiveWaysNav from "./Components/FiveWaysNav/FiveWaysNav";
import Welcome from "./Components/Welcome/Welcome";

function signInWithGoogle () {
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
};
function signOut () {
  firebase.auth().signOut()
}

function App() {
  // set the user with the firebase hook and pass the in variable set up in firebase.js
  const [user] = useAuthState(auth);

const [toDoList, setToDoList] = useState ([]);

useEffect ( () => {
 // get the database from firebase
  async function getData () {
   let response = await firestore.collection('users').get();
   let orderedResponse = firestore.collection("users").orderBy("date", 'desc');
   console.log(orderedResponse);
   const firebaseList = response.docs.map(doc => doc.data());
   setToDoList(firebaseList)
  }
  getData();},[] 
)

  function addItem (text, date, type) {
    const toDoItem = {id: Date(), toDoText: text, date: date, type:type}
    console.log("line 49", toDoItem);
     setToDoList ([...toDoList, toDoItem])
     firestore.collection('users').doc(`${toDoItem.id}`).set(toDoItem)
    }

function handleDelete (i) {
  console.log("line 85", toDoList[i].id)
    setToDoList([...toDoList.slice(0,i), ...toDoList.slice(i + 1)])
    firestore.collection('users').doc(`${toDoList[i].id}`).delete();
    
}
// CONDITIONAL RENDER DEPENDING IF USER IS LOGGED IN
  if (!user) { 
  return (
    <div className="App">
      <header className="App-header">
    <SignInButton onClick={signInWithGoogle} user={null}/>
      5 Ways to Wellbeing
      </header>
      <Welcome/>
      <FiveWaysNav/>
    </div>
    )
  } 
  return (
    <div className="App">
    <header className="App-header">
    <SignInButton className="sign-in-button" onClick={signOut} user={user} name={user.bc.displayName}/>
    My 5 Ways to Wellbeing
    </header>
    <FiveWaysNav/>
    <Input onChange={addItem}/>
    <section className="log-header"> Activity Log</section>
    <List toDoList={toDoList} handleDelete={handleDelete}/>
  </div>
  );
}

export default App;
