import React from "react";

const Todo = props => {
  return (
    <div className={`item ${props.item.completed ? "completed" : ""}`}>
      {props.item.name}
    </div>
  );
};

export default Todo;
