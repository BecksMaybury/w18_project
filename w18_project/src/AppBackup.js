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


function signInWithGoogle () {
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
};
function signOut () {
  auth.signOut()
}

function App() {
  // set the user with the firebase hook and pass the in variable set up in firebase.js
  const [user] = useAuthState(auth);
  //CHECK AUTHENTICATION
useEffect (
  () => {console.log("this is the user ",user)},[user]
) 
 // GRAB DBASE
 async function getData () {
   let response = await firestore.collection('users').get();
   let docData = response.docs.map(doc => doc.data());
   console.log ("This is docData ",docData);
   }
   getData();
// const [toDoData] = useCollectionData(docData);
// console.log("this is docData ", docData);
//  useEffect(
//    ()=> {
//       async function getData() {
//       const snapshot = await firestore.collection('users').get();
//       // console.log("snapshot ", snapshot)
//       docData = snapshot.docs.map(doc => doc.data());
//       console.log("line 35 docData ", docData);
//       setToDoList([{docData}]);
//       // return docData
//       }
//     getData();
//     // setToDoList([{id: 99, completed: false, text: "bollocks"}]);
//     console.log ("line 40", toDoList)
//     }, [user]
//   )
  const [toDoList, setToDoList] = useState([]); //instead of test item this needs to be the firestore database
  // const toDoListRef = firestore.collection(`users/D7FkuMDdmIjPFXteXivh`) //this doesn't work firestore.collection(`users/${auth.currentUser.uid}/todos`)
  
  // console.log ("this is collection ", toDoListRef);
  
  function addItem (text) {
  const toDo = {id: Math.random(), toDoText: text, completed: false }
  setToDoList ([...toDoList, toDo])
  //write to firestore database
  // DONE generate unique id 
  //DONE LOOK AT .createId method on firestore (creates an object with unique id)
}
useEffect (
  () => {
    console.log(toDoList);
  }, [toDoList]
)

function handleDelete (i) {
    setToDoList([...toDoList.slice(0,i), ...toDoList.slice(i + 1)])
}

  if (!user) { 
  return (
    <div className="App">
      <header className="App-header">
      Firebase To Do List
      </header>
    <SignInButton onClick={signInWithGoogle} user={user}/>
    </div>
    )
  } 
  return (
    <div className="App">
    <header className="App-header">
    Firebase To Do List
    </header>
    <Input onChange={addItem}/>
    <List toDoList={toDoList} handleDelete={handleDelete}/>
    <SignInButton onClick={signOut} user={user}/>
  </div>
  );
}

export default App;
