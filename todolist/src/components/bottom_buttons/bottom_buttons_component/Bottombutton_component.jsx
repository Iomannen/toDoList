import React from "react";
import "./bottombuttons.css";
class BottomButton extends React.Component {
  render() {
    const { content, callback, classname } = this.props;
    return (
      <button className={classname} onClick={callback}>
        {content}
      </button>
    );
  }
}

export default BottomButton;
