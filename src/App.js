import "./App.css";
import AddTask from "./components/addTask";
import AddButton from "./components/addButton";
import Task from "./components/task";
import HeaderButton from "./components/headerButton";

function App() {
  return (
    <div className="container mt-4 d-block text-center mx-auto">
      <HeaderButton /><br/>
      <AddButton />
      <Task />
    </div>
  );
}

export default App;
