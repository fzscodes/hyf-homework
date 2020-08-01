import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoListTable from './components/toDoList'

const toDoArray = [
  {id:1, description: 'Get out of bed', deadline: 'Wed Sep 13 2017'},
  {id:2, description: 'Brush teeth', deadline: 'Thu Sep 14 2017'},
  {id:3, description: 'Eat breakfast', deadline: 'Fri Sep 15 2017'}
];

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>My ToDo List</h2>
        <ToDoListTable toDoList={toDoArray}/>
      </div>
    </div>
  );
}

export default App;
