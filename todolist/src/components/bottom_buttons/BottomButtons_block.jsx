import React from "react";
import BottomButton from "./bottom_buttons_component/Bottombutton_component";
import "./bottombuttons_block.css";
class BottomButtons extends React.Component {
  render() {
    return (
      <div className="bottombuttons_block">
        <div className="firstbutton_block">
          <BottomButton content={"Все задачи"} />
          <BottomButton content={"Завершенные"} />
          <BottomButton content={"В процессе"} />
        </div>
        <div className="secondbutton_block">
          <BottomButton content={"Очистить"} />
        </div>
      </div>
    );
  }
}

export default BottomButtons;
