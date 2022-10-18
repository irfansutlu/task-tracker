const AddTask = ()=>{
    return (
      <div className="mt-4">
        <input
          type="text"
          className="form-control mt-4"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
        <input
          type="datetime-local"
          className="form-control mt-4"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
    );
};

export default AddTask