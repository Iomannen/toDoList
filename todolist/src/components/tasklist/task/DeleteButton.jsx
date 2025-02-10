import React from "react";

class DeleteButton extends React.Component {
  render() {
    const { taskprop, deleteCallback } = this.props;

    return (
      <button
        className="delete_button"
        onClick={() => {
          deleteCallback(taskprop);
        }}
      ></button>
    );
  }
}

export default DeleteButton;
