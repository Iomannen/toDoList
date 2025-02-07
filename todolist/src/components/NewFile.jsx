import React from "react";
import "../App.css";
import MainLogotype from "../components/mainlogo/MainLogotype.jsx";
import InputBlock from "../components/input/InputBlock.jsx";
import BottomButtons from "../components/bottom_buttons/BottomButtons_block.jsx";
import TasksCounter from "../components/tasks_counter/TasksCounter.jsx";
import TaskList from "../components/tasklist/TaskList.jsx";

class NewFile extends React.Component {
  state = {
    count: localStorage.length,
  };

  renderList = () => {
    const tasks = [];
    const keys = Object.keys(localStorage);
    for (let key of keys) {
      const obj = {
        name: key,
        isChecked: localStorage.getItem(key),
      };
      tasks.push(obj);
    }

    return tasks.map((task) => (
      <div className="task" id={task.name} key={task.name}>
        <label className="checkbox_label">
          <input type="checkbox" className="task_checkbox"></input>
          <span className="custom_checkbox"></span>
        </label>
        <input
          className="task_name"
          placeholder={task.name}
          disabled
          id={`task_name${task.name}`}
        ></input>
        <button className="edit_button"></button>
        <button
          className="delete_button"
          onClick={() => {
            localStorage.removeItem(task.name);
            const div = document.getElementById(task.name);
            div.remove();
          }}
        ></button>
      </div>
    ));
  };

  handleClick = () => {
    const input = document.querySelector(".input");
    localStorage.setItem(input.value, true);
    this.setState({ count: localStorage.length });
    input.value = "";
  };
  render() {
    return (
      <div>
        <MainLogotype />
        <InputBlock callback={this.handleClick} />
        <BottomButtons />
        <TasksCounter counter={this.state.count} />
        <TaskList callback={this.renderList} />
      </div>
    );
  }
}

export default NewFile;
