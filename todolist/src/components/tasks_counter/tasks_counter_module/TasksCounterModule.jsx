import React from "react";
import "./tasks_counter_module.css";

class TasksCounterModule extends React.Component {
  render() {
    const { content, counter } = this.props;
    return (
      <div className="tasksCounterModule">
        <div className="tasksText">{content}</div>
        <div className="tasksCount">{counter}</div>
      </div>
    );
  }
}

export default TasksCounterModule;
