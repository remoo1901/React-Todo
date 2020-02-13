import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.todoData.map(task => {
        return <Todo task={task} key={task.id} toggleTask={props.toggleTask} />;
      })}
      <button className="clear-btn" onClick={props.clearCompleted}>
      Clear Completed
    </button>
    </div>
  );
};

export default TodoList;




// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
