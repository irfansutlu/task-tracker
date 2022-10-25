import axios from "axios";
import { useState, useEffect } from "react";
import TaskList from "./taskList";

const AddTask = () => {
  const url = "https://6357ecbcc26aac906f3669c4.mockapi.io/api/tasks";
  const [tasking, setTasking] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const getTask = async () => {
    const { data } = await axios(url);
    setTasking(data);
    console.log(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    addNewTask(newTask);
    setTask("");
    setDate("");
  };

  const addNewTask = async (item) => {
    try {
      await axios.post(url, item);
    } catch (error) {}
    getTask();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <input
            type="text"
            className="form-control mt-4"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Enter a Task"
            required
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="datetime-local"
            className="form-control mt-4"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-25 m-4" type="submit">
          Add
        </button>
      </form>
      <TaskList tasking={tasking} getTask={getTask} />
    </>
  );
};

export default AddTask;
