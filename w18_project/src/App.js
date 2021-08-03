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
import FiveWaysDisplay from "./Components/fiveWaysDisplay/fiveWaysDisplay";

function signInWithGoogle () {
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
};
function signOut () {
  firebase.auth().signOut()
}

function App() {
  // set the user with the firebase hook and pass the in variable set up in firebase.js
  const [user] = useAuthState(auth);
  //CHECK AUTHENTICATION
useEffect (
  () => {console.log("this is the user ",user)},[user]
) 

const [toDoList, setToDoList] = useState ([]);

useEffect ( () => {
 // GRAB DBASE
 async function getData () {
   let response = await firestore.collection('users').get();
  //  let response = await firestore.collection('users').orderBy('date', 'asc');
   const firebaseList = response.docs.map(doc => doc.data());
   console.log ("This is the firebaseList ",firebaseList);
   setToDoList(firebaseList)
  }
   getData();},[]
   )

  function addItem (text, date) {
    const toDoItem = {id: Date(), toDoText: text, completed:false, date: date}
    console.log("line 49", toDoItem);
     setToDoList ([...toDoList, toDoItem])
     firestore.collection('users').doc(`${toDoItem.id}`).set(toDoItem)
    }

  useEffect (
  () => {
    console.log(toDoList);
  }, [toDoList]
)

function handleDelete (i) {
  console.log("line 85", toDoList[i].id)
    setToDoList([...toDoList.slice(0,i), ...toDoList.slice(i + 1)])
    // firestore.collection('users').doc(`${i}`).delete();
    firestore.collection('users').doc(`${toDoList[i].id}`).delete();
    
}

// function handleCompleted (i) {
//   // setToDoList([...toDoList(0,i), toDoList[i].completed: true])
//   console.log("completed button called", toDoList[i])
//   // const listItem = firestore.collection('users').doc.equalTo(`${toDoList[i]}`)
//   // console.log ("listItem ",listItem)
//   if (firestore.collection('users').doc(`${toDoList[i].completed}`) === true) {
//     console.log ("it's true")
//   }
//   else {console.log("false")}
//   console.log(firestore.collection('users').doc(`${i}`))
//   // firestore.collection('users').doc(`${i+1}`).set({completed: !completed}, {merge:true});
//   firestore.collection('users').doc(`${toDoList[i].id}`).set({completed: true}, {merge: true});
  
// }

  if (!user) { 
  return (
    <div className="App">
      <header className="App-header">
      Firebase To Do List
    <SignInButton onClick={signInWithGoogle} user={null}/>
      </header>
    </div>
    )
  } 
  return (
    <div className="App">
    <header className="App-header">
    Firebase To Do List - {user.bc.displayName}
    <SignInButton className="sign-in-button" onClick={signOut} user={user}/>
    </header>
    <FiveWaysDisplay/>
    <Input onChange={addItem}/>
    <List toDoList={toDoList} handleDelete={handleDelete}/>
  </div>
  );
}

export default App;
