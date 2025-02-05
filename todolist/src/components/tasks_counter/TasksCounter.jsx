import React from "react";
import TasksCounterModule from "./tasks_counter_module/TasksCounterModule";
import "./tasks_counter.css";

class TasksCounter extends React.Component {
  render() {
    return (
      <div className="tasksCounter">
        <TasksCounterModule
          content={"Все задачи"}
          counter={`${localStorage.length}`}
        />
        <TasksCounterModule
          content={"Завершено"}
          counter={`${(() => {
            const keys = Object.keys(localStorage);
            let counter = 0;
            for (let key of keys) {
              if (localStorage.getItem(key) === "false") {
                counter++;
              }
            }
            return counter;
          })()} из ${localStorage.length}`}
        />
      </div>
    );
  }
}

export default TasksCounter;
