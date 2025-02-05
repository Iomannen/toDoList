import "./App.css";
import MainLogotype from "./components/mainlogo/MainLogotype.jsx";
import InputBlock from "./components/input/InputBlock.jsx";
import BottomButtons from "./components/bottom_buttons/BottomButtons_block.jsx";
import TasksCounter from "./components/tasks_counter/TasksCounter.jsx";
function App() {
  return (
    <div className="background">
      <MainLogotype />
      <InputBlock />
      <BottomButtons />
      <TasksCounter />
    </div>
  );
}

export default App;
