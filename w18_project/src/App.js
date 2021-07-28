import React from "react";
import {useState} from "react";
import Input from "../src/Components/Input/input"
import List from "../src/Components/List/list.js"

import './App.css';

function App() {

  const [toDoList, setToDoList] = useState(["test item"]);
  console.log(toDoList);

function addItem (text) {
  setToDoList ([...toDoList, text])
}

function handleDelete (i) {
    setToDoList([...toDoList.slice(0,i), ...toDoList.slice(i + 1)])
}

  return (
    <div className="App">
      <header className="App-header">
      Firebase To Do List
      </header>
      <Input onChange={addItem}/>
      <List toDoList={toDoList} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
