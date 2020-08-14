import React, { Component } from "react";
import "../App.css";

export class ToDoItemRow extends Component {
    constructor(props) {
        super(props);
        this.state = {todoItem:this.props.toDo};
    }
  render() {
    return (
      <div className = "list-no-bullets"> 
        <li>
          <input className ="checkbox" type="checkbox" /> &nbsp;
    <span className="todo">{this.state.todoItem.description}&nbsp;|&nbsp;{this.state.todoItem.deadline}</span> &nbsp;
          <button className="button" type= "button" onClick={()=>this.props.deleteItemHandler(this.props.toDo)}>DELETE</button>
        </li>
      </div>
    );
  }
}
