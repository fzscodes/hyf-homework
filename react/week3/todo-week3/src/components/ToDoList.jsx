import React, { Component } from "react";
import { ToDoItemRow } from "./ToDoItemRow";
import "../App.css";
//import PropTypes from "prop-types";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      newTodo: "",
      newTodoDeadline: "",
    };
    this.fetchData = this.fetchData.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const baseUrl =
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          toDoList: data,
        })
      )
      .catch((err) => this.setState({ error: true }));
  }

  addItem(todoDescription, todoDeadline) {
    const newList = this.state.toDoList;
    newList.push({
      id: Math.floor(Math.random() * 100),
      description: todoDescription,
      deadline: todoDeadline,
    });
    this.setState({ toDoList: newList });
  }

  deleteItem(todo) {
    const todoListNew = this.state.toDoList.filter(
      (item) => item.id !== todo.id
    );
    this.setState({ toDoList: todoListNew });
  }

  handleSubmit(e) {
    e.preventDefault();
    const taskDescription = this.state.newTodo;
    const taskDeadline = this.state.newTodoDeadline;
    if (taskDescription && taskDeadline) {
      this.addItem(taskDescription, taskDeadline);
    }
  }
  changeHandler(event) {
    if (event.target.name === "task-description")
      this.setState({ newTodo: event.target.value });
    if (event.target.name === "task-deadline")
      this.setState({ newTodoDeadline: event.target.value });
  }

  render() {
    const rows = this.state.toDoList.map((todo) => (
      <ToDoItemRow
        toDo={todo}
        key={todo.id}
        deleteItemHandler={this.deleteItem}
        updateItemHandler={this.updateItem}
      />
    ));
    if (rows.length > 0) {
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <label>ToDo description</label>
            <input
              type="text"
              name="task-description"
              placeholder="description"
              onChange={this.changeHandler}
            ></input>
            <br />
            <label>deadline</label>
            <input
              type="date"
              name="task-deadline"
              onChange={this.changeHandler}
            ></input>
            <br />
            <input type="submit" value="Add ToDo" />
          </form>
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
