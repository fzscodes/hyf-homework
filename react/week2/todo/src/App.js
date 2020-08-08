import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";
import Timer from "./components/Timer";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Timer />
        <h2>My ToDo List</h2>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
