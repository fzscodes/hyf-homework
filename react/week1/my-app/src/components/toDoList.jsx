import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class ToDoListTable extends Component {
    render() { 
        const rows = [];
        this.props.toDoList.forEach(toDo => {
            rows.push(
                <ToDoItemRow 
                toDo = {toDo} />
            );
        });
        return (
            <Table striped bordered variant="dark">
                <thead>
                    <tr>  
                        <th>#</th>                      
                        <th>Description</th>
                        <th>Deadline</th>
                    </tr>
                </thead>
            <tbody>{rows}</tbody>
            </Table>
        );
    }
}
 
class ToDoItemRow extends Component {
    render() { 
        const toDo = this.props.toDo;

        return (
        <tr>
            <td>{toDo.id}</td>
          <td >{toDo.description}</td>
          <td>{toDo.deadline}</td>
        </tr> 
      );
    }
}


export default ToDoListTable;