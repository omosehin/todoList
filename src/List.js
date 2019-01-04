import React from "react";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button
                className="listButton"
                onClick={() => {
                  this.props.deleteTodo(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
