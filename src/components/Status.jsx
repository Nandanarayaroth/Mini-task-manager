function Status() {
  return (
    <div>
      <div className="flex gap-4 m-4 justify-center">
        <span className="border border-gray-300 text-center p-4">
          <span className="m-2">To Do</span>
          <div className="m-2 border border-gray-300 rounded-lg p-2">
            <h4>Design login page</h4>
            <p>Create login page UI</p>
            <button className="border rounded-lg border-red-200 bg-red-300">
              <span className="p-2">"selectedPriority"</span>
            </button>
            <br></br>
            <button className="border rounded-lg border-black-200">
              <span className="p-2">Edit</span>
            </button>
            <button className="border rounded-lg border-black-200 m-2 ml-2">
              <span className="p-2">Delete</span>
            </button>
          </div>
        </span>

        <span className="border border-gray-300 text-center rounded-lg p-2">
          <span className="m-2">In Progress</span>
          <div className="m-2 border border-gray-300 rounded-lg p-4">
            <h4>"Todo-title"</h4>
            <p>"Todo-description"</p>
            <button className="border rounded-lg border-red-200 bg-red-300">
              <span className="p-2">"Selected Priority"</span>
            </button>
            <br></br>
            <button className="border rounded-lg border-black-200">
              <span className="p-2">Edit</span>
            </button>
            <button className="border rounded-lg border-black-200 m-2 ml-2">
              <span className="p-2">Delete</span>
            </button>
          </div>
        </span>

        <span className="border border-gray-300 text-center p-2">
          <span className="m-2">Done</span>
          <div className="m-2 border border-gray-300 rounded-lg p-4">
            <h4>"finished task1"</h4>
            <p>"description"</p>
            <button className="border rounded-lg border-red-200 bg-red-300">
              <span className="p-2">"selectedPriority"</span>
            </button>
            <br></br>
            <button className="border rounded-lg border-black-200">
              <span className="p-2">Edit</span>
            </button>
            <button className="border rounded-lg border-black-200 m-2 ml-2">
              <span className="p-2">Delete</span>
            </button>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Status;
