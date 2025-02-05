import React from "react";
import Input from "./input_components/input/Input.jsx";
import Button from "./input_components/button/Button.jsx";
import "./inputBlock.css";

class InputBlock extends React.Component {
  render() {
    return (
      <div className="taskAdditionBlock">
        <Input />
        <Button />
      </div>
    );
  }
}

export default InputBlock;
