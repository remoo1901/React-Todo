import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: ""
    };
  }
  changeHandler = e => {
    this.setState({ taskText: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addTask(this.state.taskText);
    this.setState({ taskText: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="taskText"
          value={this.state.taskText}
          onChange={this.changeHandler}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
