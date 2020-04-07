import React, { Component } from "react";

import TodoForm from "./components/TodoComponents/TodoForm";
import { todoData } from "./components/data";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: todoData,
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


  addTask = (taskText) => {
    const newTask = {
      name: taskText,
      completed: false,
      id: Date.now(),
    };

    this.setState({ todoData: [...this.state.todoData, newTask] });
  };

  clearCompleted = (e) => {
    //e.preventdefault()
    this.setState({
      todoData: this.state.todoData.filter((task) => !task.completed),
    });
    console.log(this.state.todoData);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>TODO List</h1>
           <TodoForm addTask={this.addTask} />
        </div>
       
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
