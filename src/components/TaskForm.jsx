// import React, { useState } from "react";

// export default function TaskForm() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [dueDate, setDueDate] = useState("");
//   const [showDateInput, setShowDateInput] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title.trim() || !description.trim() || !dueDate || !priority) {
//       alert("Please fill all fields");
//       return;
//     }

//     const newTask = {
//       id: Date.now(),
//       title,
//       description,
//       priority,
//       dueDate,
//       status: "To Do",
//     };

//     console.log("Task added:", newTask);

//     setTitle("");
//     setDescription("");
//     setPriority("");
//     setDueDate("");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-gray-900 border border-gray-200 rounded-xl shadow-sm w-full max-w-2xl mx-auto p-4 flex flex-col gap-3 relative"
//     >
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full text-white font-medium text-lg focus:outline-none"
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         rows={2}
//         className="w-full text-sm text-white focus:outline-none resize-none border-none"
//       />

//       <div className="flex items-center gap-3 text-sm text-whiterelative">
//         <div className="relative">
//           <button
//             type="button"
//             onClick={() => setShowDateInput((prev) => !prev)}
//             className={`border border-gray-300 rounded-md px-3 py-1 flex items-center gap-1 hover:bg-gray-100 ${
//               !dueDate ? "text-red-500" : ""
//             }`}
//           >
//             📅 {dueDate ? dueDate : "Select Date"}
//           </button>
//           {showDateInput && (
//             <input
//               type="date"
//               value={dueDate}
//               onChange={(e) => {
//                 setDueDate(e.target.value);
//                 setShowDateInput(false);
//               }}
//               className="absolute top-10 left-0 border border-gray-200 rounded-md shadow-sm px-2 py-1 text-white"
//             />
//           )}
//         </div>

//         <div className="relative">
//           <button
//             type="button"
//             onClick={() => setShowDropdown((prev) => !prev)}
//             className={`border border-gray-300 rounded-md px-3 py-1 flex items-center gap-1 hover:text-white ${
//               !priority ? "text-red-500" : ""
//             }`}
//           >
//             🚩 {priority ? priority : "Select Priority"}
//           </button>

//           {showDropdown && (
//             <div className="absolute top-10 left-28 bg-white border border-gray-200 rounded-md shadow-md w-32 z-10">
//               {["Low", "Medium", "High"].map((level) => (
//                 <button
//                   key={level}
//                   type="button"
//                   onClick={() => {
//                     setPriority(level);
//                     setShowDropdown(false);
//                   }}
//                   className={`block w-full text-left px-3 py-1 hover:bg-gray-100 ${
//                     priority === level
//                       ? "bg-gray-50 font-medium text-white"
//                       : ""
//                   }`}
//                 >
//                   {level}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="flex justify-end mt-2">
//         <button
//           type="button"
//           className="text-white hover:text-gray-700 font-medium mr-3"
//           onClick={() => {
//             setTitle("");
//             setDescription("");
//             setPriority("");
//             setDueDate("");
//           }}
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="bg-white text-black font-medium px-4 py-1.5 rounded-md hover:bg-red-500 transition"
//         >
//           Add task
//         </button>
//       </div>
//     </form>
//   );
// }








import React, { useState } from "react";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(""); // empty default
  const [showDropdown, setShowDropdown] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [showDateInput, setShowDateInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !dueDate || !priority) {
      alert("Please fill all fields and select priority & date.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      status: "To Do",
    };

    console.log("Task added:", newTask);

    setTitle("");
    setDescription("");
    setPriority(""); 
    setDueDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl shadow-sm w-full max-w-2xl mx-auto p-4 flex flex-col gap-3 relative"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-gray-800 font-medium text-lg focus:outline-none"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={2}
        className="w-full text-sm text-gray-600 focus:outline-none resize-none border-none"
      />

      <div className="flex items-center gap-3 text-sm text-gray-600 relative">

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowDateInput((prev) => !prev)}
            className={`border border-gray-300 rounded-md px-3 py-1 flex items-center gap-1 hover:bg-gray-100 ${
              !dueDate ? "text-red-500" : ""
            }`}
          >
            {dueDate ? dueDate : "Select Date"}
          </button>
          {showDateInput && (
            <input
              type="date"         
              value={dueDate}
              onChange={(e) => {
                setDueDate(e.target.value);
                setShowDateInput(false);
              }}
              className="absolute top-10 left-0 border border-gray-200 rounded-md shadow-sm px-2 py-1 text-gray-700"
            />
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowDropdown((prev) => !prev)}
            className={`border border-gray-300 rounded-md px-3 py-1 flex items-center gap-1 hover:bg-gray-100 ${
              !priority ? "text-red-500" : ""
            }`}
          >
           {priority ? priority : "Select Priority"}
          </button>

          {showDropdown && (
            <div className="absolute top-10 left-28 bg-white border border-gray-200 rounded-md shadow-md w-32 z-10">
              {["Low", "Medium", "High"].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => {
                    setPriority(level);
                    setShowDropdown(false);
                  }}
                  className={`block w-full text-left px-3 py-1 hover:bg-gray-100 ${
                    priority === level
                      ? "bg-gray-50 font-medium text-gray-800"
                      : ""
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-700 font-medium mr-3"
          onClick={() => {
            setTitle("");
            setDescription("");
            setPriority("");
            setDueDate("");
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-red-400 text-white font-medium px-4 py-1.5 rounded-md hover:bg-red-500 transition"
        >
          Add task
        </button>
      </div>
    </form>
  );
}
