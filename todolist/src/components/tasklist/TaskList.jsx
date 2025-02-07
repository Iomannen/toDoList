import React from "react";
import Task from "./task/Task";
class TaskList extends React.Component {
  render() {
    const { callback } = this.props;
    return <Task callback={callback} />;
  }
}

export default TaskList;
