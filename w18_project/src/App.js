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

const [listLength, setListLength] = useState (0);
const [toDoList, setToDoList] = useState ([]);

useEffect ( () => {
 // GRAB DBASE
 async function getData () {
   let response = await firestore.collection('users').get();
   const firebaseList = response.docs.map(doc => doc.data());
   console.log ("This is the firebaseList ",firebaseList);
   setListLength (firebaseList.length)
   setToDoList(firebaseList)
  }
   getData();},[]
   )
   
  //  getData();

//     // setToDoList([{id: 99, completed: false, text: "bollocks"}]);
//     console.log ("line 40", toDoList)
//     }, [user]
//   )
  // const [toDoList, setToDoList] = useState([{id: Math.random(), toDoText: "test item here", completed: false }]); //instead of test item this needs to be the firestore database
  // const toDoListRef = firestore.collection(`users/D7FkuMDdmIjPFXteXivh`) //this doesn't work firestore.collection(`users/${auth.currentUser.uid}/todos`)
  
  // console.log ("this is collection ", toDoListRef);
  
  // const toDoItem = {id: Math.random(), toDoText: "different stuff", completed: false }

  function addItem (text) {
    const toDoItem = {id: Math.random(), toDoText: text, completed:false}
    console.log("line 49", toDoItem);
     setToDoList ([...toDoList, toDoItem])
     let docId = listLength + 1
     setListLength(docId);
     firestore.collection('users').doc(`${docId}`).set(toDoItem)
    // const toDo = text;
      // setToDoList ([...toDoList, text])
    // const toDoItemText = toDoItem.toDoText;
    // console.log("line 54", toDoItemText)
    // return toDoItemText
    }
    // useEffect( () => {
       
    //write to firestore database
    // DONE generate unique id 
    //DONE LOOK AT .createId method on firestore (creates an object with unique id)

// addItem()
useEffect (
  () => {
    console.log(toDoList);
  }, [toDoList]
)

function handleDelete (i) {
    setToDoList([...toDoList.slice(0,i), ...toDoList.slice(i + 1)])
    firestore.collection('users').doc(`${i+1}`).delete();
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
    {/* <List toDoList={firestore.collection('users').doc} handleDelete={handleDelete}/> */}
    <SignInButton onClick={signOut} user={user}/>
  </div>
  );
}

export default App;
