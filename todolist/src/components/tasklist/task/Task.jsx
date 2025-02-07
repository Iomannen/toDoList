import React from "react";
import "./task.css";

class Task extends React.Component {
  render() {
    const { callback } = this.props;
    return callback();
  }
}

export default Task;
