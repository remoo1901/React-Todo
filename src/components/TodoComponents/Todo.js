import React from "react";

const Todo = props => {
  return (
    <div className={`task ${props.task.completed ? "completed" : ""}`}></div>
  );
};

export default Todo;
