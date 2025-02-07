import React from "react";
import "./input.css";

class Input extends React.Component {
  render() {
    const { enterCallback } = this.props;
    return (
      <input
        className="input"
        placeholder="Добавить новую задачу..."
        onKeyUp={enterCallback}
      ></input>
    );
  }
}

export default Input;
