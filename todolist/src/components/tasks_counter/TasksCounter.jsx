import React from "react";
import TasksCounterModule from "./tasks_counter_module/TasksCounterModule";
import "./tasks_counter.css";

class TasksCounter extends React.Component {
  render() {
    const { counter, secondCounter } = this.props;
    return (
      <div className="tasksCounter">
        <TasksCounterModule
          content={"Все задачи"}
          counter={counter} // ну тут просто я счетчик ставлю равным
        />
        <TasksCounterModule
          content={"Завершено"}
          counter={`${secondCounter} из ${counter}`} //  этой функцией я перебираю задачи в локалсторедже, те которые false те не выполнены
        />
      </div>
    );
  }
}

export default TasksCounter;
