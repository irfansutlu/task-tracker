import axios from "axios";
import React from "react";

const TaskList = ({ tasking, getTask }) => {
  const deleteBtn = async (id) => {
    const url = "https://6357ecbcc26aac906f3669c4.mockapi.io/api/tasks";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {}
    getTask();
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {tasking.map((item) => {
        const { date, id, task } = item;
        return (
          
            <div className="col">
              <div className="card" key={id}>
                <div className="card-body">
                  <h5 className="card-title">{date}</h5>
                  <p className="card-text">{task}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBtn(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default TaskList;
