import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { todoData } from "./components/data";
import "./components/TodoComponents/Todo.css";

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

  toggleTask = taskId => {
    this.setState({
      todoData: this.state.todoData.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todoData={this.state.todoData} toggleTask={this.toggleTask} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
