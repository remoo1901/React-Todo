import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="task-list">
      {props.todoData.map((task) => {
        return <Todo task={task} key={task.id} toggleTask={props.toggleTask} />;
      })}
      <button className="clear-btn" onClick={props.clearCompleted}>Clear Complete</button>
    </div>
  );
};

export default TodoList;
