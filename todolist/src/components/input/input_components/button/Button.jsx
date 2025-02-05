import React from "react";
import plus from "./plus.svg";
import "./button.css";

import Input from "../input/Input";

class Button extends React.Component {
  addTask = (event) => {
    const input = document.querySelector("input");
    localStorage.setItem(input.value, true);
  };
  render() {
    return (
      <button className="additionButton" onClick={this.addTask}>
        <div className="buttonLabel">Добавить</div>
        <img src={plus} className="buttonPlus"></img>
      </button>
    );
  }
}

export default Button;
