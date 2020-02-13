import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { todoData } from "./components/data";
import "./components/TodoComponents/Todo.css";

class App extends Component {
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

  addTask = taskText => {
    const newTask = {
      name: taskText,
      completed: false,
      id: Date.now()
    };

    this.setState({
      todoData: [...this.state.todoData, newTask]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoData: this.state.todoData.filter(item => item.completed === false)
    });
    console.log(this.state.todoData);
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTask={this.addTask} />
        <TodoList
          todoData={this.state.todoData}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
