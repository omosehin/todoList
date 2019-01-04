import React from "react";
import Form from "./Form";
import List from "./List";
import "./App.css";

class App extends React.Component {
  state = {
    todos: ["Go to Bed", "Wake up", "Brush my teeth", "Take your bath"]
  };

  updateTodoList = item => {
    let todoList = [...this.state.todos];
    todoList.push(item);

    this.setState({
      todos: todoList
    });
  };

  deleteTodoList = index => {
    let updateTodo = this.state.todos.filter((item, i) => {
      return i !== index;
    });

    this.setState({
      todos: updateTodo
    });
  };

  render() {
    return (
      <div className="App">
        <List todoList={this.state.todos} deleteTodo={this.deleteTodoList} />
        <Form update={this.updateTodoList} />
      </div>
    );
  }
}

export default App;
