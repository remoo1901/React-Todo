import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.todoData.map(task => {
        return <Todo  key={task.id} />;
      })}
    </div>
  );
};

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
