import React from "react";
import Input from "./input_components/input/Input.jsx";
import Button from "./input_components/button/Button.jsx";
import "./inputBlock.css";
class InputBlock extends React.Component {
  render() {
    const { callback, counter } = this.props;
    return (
      <div className="taskAdditionBlock">
        <Input />
        <Button counter={counter} callback={callback} />
      </div>
    );
  }
}

export default InputBlock;
