const Task = () => {
  const deleteBtn = (e)=>{
    e.target.parentElement.parentElement.parentElement.remove();
  }

  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Time</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis dolore quibusdam tenetur, tempora qui velit harum
              asperiores esse, ab quae provident labore rem ducimus ut unde
              aliquam sequi, veritatis eos.
            </p>
            <button className="btn btn-danger" onClick={deleteBtn}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
