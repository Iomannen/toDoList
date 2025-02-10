import React from "react";
import "./task.css";

class Task extends React.Component {
  render() {
    const { callback, tasks } = this.props;
    return callback(tasks);
  }
}

export default Task;
