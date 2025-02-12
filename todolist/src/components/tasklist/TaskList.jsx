import React from "react";
import Task from "./task/Task";
import "./taskList.css";
class TaskList extends React.Component {
  render() {
    const { callback, tasks } = this.props;
    return (
      <div className="tasklist">
        <Task callback={callback} tasks={tasks} />
      </div>
    );
  }
}

export default TaskList;
