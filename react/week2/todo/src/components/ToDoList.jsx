import React, { Component } from "react";
import { ToDoItemRow } from "./ToDoItemRow";
import "../App.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        { id: 1, description: "Get out of bed" },
        { id: 2, description: "Brush teeth" },
        { id: 3, description: "Eat breakfast" },
        { id: 4, description: "Go for a run" },
        { id: 5, description: "Buy grocery" },
        { id: 6, description: "Eat dinner" },
      ],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem() {
    const newList = this.state.toDoList;
    newList.push({
      id: Math.floor(Math.random() * 100),
      description: "new todo",
    });
    this.setState({ toDoList: newList });
  }

  deleteItem(todo) {
    const todoListNew = this.state.toDoList.filter(
      (item) => item.id != todo.id
    );
    this.setState({ toDoList: todoListNew });
  }

  render() {
    const { toDoList } = this.state;
    const rows = this.state.toDoList.map((todo) => (
      <ToDoItemRow
        toDo={todo}
        key={todo.id}
        deleteItemHandler={this.deleteItem}
      />
    ));
    if (rows.length > 0) {
      return (
        <>
          <button className="add-button" onClick={this.addItem}>
            Add toDo
          </button>
          <ul>{rows}</ul>
        </>
      );
    } else {
      return (
        <>
          <button className="add-button" onClick={this.addItem}>
            Add toDo
          </button>
          <p>No items...</p>
        </>
      );
    }
  }
}

export default ToDoList;
