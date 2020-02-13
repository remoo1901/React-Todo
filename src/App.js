import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { todoData } from "./components/data";

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todoData: todoData
    };
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todoData={this.state.todoData} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
