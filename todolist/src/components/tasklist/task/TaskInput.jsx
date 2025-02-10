import React from "react";
class TaskInput extends React.Component {
  render() {
    console.log(counter);
    return (
      <input
        className="task_name"
        placeholder="asfasf"
        disabled
        id={`task_name$`}
      ></input>
    );
  }
}
export default TaskInput;
