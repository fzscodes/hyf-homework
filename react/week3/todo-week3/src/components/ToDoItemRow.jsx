import React, { Component } from "react";
import "../App.css";
//import PropTypes from "prop-types";

export class ToDoItemRow extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        todoItem: this.props.toDo,
        isEditing: false,
        hideUpdateButton:true,
        hideEditButton:false
    };

    this.editItemClicked = this.editItemClicked.bind(this);
    this.todoUpdated = this.todoUpdated.bind(this);
  }

  editItemClicked(e){
    e.preventDefault();
    this.setState(
      {
      isEditing:true,
      hideUpdateButton:false,
      hideEditButton:true
    });
  }
  todoUpdated(e){
    const newTodo = this.state.todoItem;
    newTodo.description = e.target.value;
    this.setState({todoItem: newTodo});
  }
  render() {
    let todoDetails;
      if(this.state.isEditing)
      {
        todoDetails = this.state.todoItem.description;
      }
      else{
        todoDetails = this.state.todoItem.description + " | " +this.state.todoItem.deadline;
      }
    return (
      
      <div className="list-no-bullets">
        <li>
          <input className="checkbox" type="checkbox" /> &nbsp;
          <input className="todo" value={todoDetails} onChange={this.todoUpdated}>
        </input>
          &nbsp;
          <button
            className="button"
            type="button"
            onClick={() => this.props.deleteItemHandler(this.props.toDo)}
          >
            DELETE
          </button>
          <button
            className="edit-button"
            type="button"
            hidden={this.state.hideEditButton}
            onClick={(event) => this.editItemClicked(event)}
            >
            EDIT
          </button>
          <button
            type="button"
            hidden={this.state.hideUpdateButton}
            onClick={() => this.props.editItemHandler(this.props.toDo)}
            >
            UPDATE
          </button>
        </li>
      </div>
    );
  }
}
