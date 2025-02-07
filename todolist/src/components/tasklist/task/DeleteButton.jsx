import React from "react";

class DeleteButton extends React.Component {
  render() {
    const { taskprop, deleteCallback } = this.props;

    return (
      <button
        className="delete_button"
        onClick={() => {
          console.log(taskprop.name);
          localStorage.removeItem(taskprop.name);
          deleteCallback();
        }}
      ></button>
    );
  }
}

export default DeleteButton;
