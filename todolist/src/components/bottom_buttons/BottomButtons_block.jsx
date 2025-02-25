import React from "react";
import BottomButton from "./bottom_buttons_component/Bottombutton_component";
import "./bottombuttons_block.css";
class BottomButtons extends React.Component {
  render() {
    const { alltasks, completetasks, inprocesstasks, deletebutton } =
      this.props;
    return (
      <div className="bottombuttons_block">
        <div className="firstbutton_block">
          <BottomButton
            content={"Все задачи"}
            callback={alltasks}
            classname={"bottombutton allbutton active"}
          />
          <BottomButton
            content={"Завершенные"}
            callback={completetasks}
            classname={"bottombutton completebutton"}
          />
          <BottomButton
            content={"В процессе"}
            callback={inprocesstasks}
            classname={"bottombutton inprocessbutton"}
          />
        </div>
        <div className="secondbutton_block">
          <BottomButton
            content={"Очистить"}
            callback={deletebutton}
            classname={"bottombutton deletebutton disappear"}
          />
        </div>
      </div>
    );
  }
}

export default BottomButtons;
