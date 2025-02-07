import React from "react";
import plus from "./plus.svg";
import "./button.css";
class Button extends React.Component {
  render() {
    const { callback } = this.props;
    return (
      <button className="additionButton" onClick={callback}>
        <div className="buttonLabel">Добавить</div>
        <img src={plus} className="buttonPlus"></img>
      </button>
    );
  }
}
export default Button;
