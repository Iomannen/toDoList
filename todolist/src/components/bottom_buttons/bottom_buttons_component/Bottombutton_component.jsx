import React from "react";
import "./bottombuttons.css";
class BottomButton extends React.Component {
  render() {
    const { content, active = false } = this.props;
    return <button className="bottombutton">{this.props.content}</button>;
  }
}

export default BottomButton;
