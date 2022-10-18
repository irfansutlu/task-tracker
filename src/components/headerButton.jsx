import AddTask from "./addTask";
import { useState } from "react";

const HeaderButton = ()=>{
  const [visible, setVisible] = useState(true);
    return (
      <>
        <h1>Task Tracker</h1>
        <button className="btn btn-warning" onClick={() => setVisible(!visible)}>
          {visible ? "Close Task" : "Open Task"}
        </button>

        {visible && <AddTask/>}
      </>
    );
}

export default HeaderButton