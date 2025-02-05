import React from "react";
import "./input.css";

class Input extends React.Component {
  render() {
    return (
      <input className="input" placeholder="Добавить новую задачу..."></input>
    );
  }
}

export default Input;
