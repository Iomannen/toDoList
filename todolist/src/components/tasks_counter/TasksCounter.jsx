import React from "react";
import TasksCounterModule from "./tasks_counter_module/TasksCounterModule";
import "./tasks_counter.css";
class TasksCounter extends React.Component {
  render() {
    return (
      <div className="tasksCounter">
        <TasksCounterModule content={"Все задачи"} counter={"0"} />
        <TasksCounterModule content={"Завершено"} counter={"0 из 0"} />
      </div>
    );
  }
}

export default TasksCounter;
