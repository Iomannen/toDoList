import React from "react";
import "../App.css";
import MainLogotype from "../components/mainlogo/MainLogotype.jsx";
import InputBlock from "../components/input/InputBlock.jsx";
import BottomButtons from "../components/bottom_buttons/BottomButtons_block.jsx";
import TasksCounter from "../components/tasks_counter/TasksCounter.jsx";
import TaskList from "../components/tasklist/TaskList.jsx";
import DeleteButton from "./tasklist/task/DeleteButton.jsx";

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
          <input
            id={`checkbox${task.name}`}
            type="checkbox"
            className="task_checkbox"
            onChange={() => {
              const checkbox = document.getElementById(`checkbox${task.name}`); // этот инпут нужно сделать отдельным компонентом, тогда можно будет прокинуть в него колбэк и сет стейт колбэк
              checkbox.setAttribute("disabled", "disabled"); // если что то не понятно
              const taskinput = document.getElementById(
                `task_name${task.name}`
              );
              taskinput.classList.add("completedtask_name");
              localStorage.removeItem(task.name);
              localStorage.setItem(task.name, false);
            }}
          ></input>
          <span className="custom_checkbox"></span>
        </label>
        <input
          className="task_name"
          placeholder={task.name}
          disabled
          id={`task_name${task.name}`}
        ></input>
        <button className="edit_button"></button>
        <DeleteButton taskprop={task} deleteCallback={this.deleteButton} />
      </div>
    ));
  };
  deleteButton = () => {
    this.setState({ count: localStorage.length }); // величайшее изобретение человечества
  };
  handleEnter = (event) => {
    const input = document.querySelector(".input");
    if (input.value !== "" && event.key === "Enter") {
      localStorage.setItem(input.value, true);
      this.setState({ count: localStorage.length });
      input.value = "";
    }
  };
  handleClick = () => {
    const input = document.querySelector(".input");
    if (input.value !== "") {
      localStorage.setItem(input.value, true);
      this.setState({ count: localStorage.length });
      input.value = "";
    }
  };
  render() {
    return (
      <div>
        <MainLogotype />
        <InputBlock
          callback={this.handleClick}
          enterCallback={this.handleEnter}
        />
        <BottomButtons />
        <TasksCounter counter={this.state.count} />
        <TaskList callback={this.renderList} />
      </div>
    );
  }
}

export default NewFile;
