import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = userData;
    data.forEach(function (elem) {
      if (asignTo.toLowerCase() === elem.firstName.toLowerCase()) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
    });
    setUserData(data);
    console.log(data);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setAsignTo("");
  };
  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded ">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-wrap w-full  items-start justify-between "
      >
        <div className="w-1/2">
          <div>
            <h3 className="w-2/5 flex flex-col items-start">Task Title</h3>
            <input
              className="text-sm p-5 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
              type="text"
              placeholder="Make a UI design"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div>
            <h3 className="w-2/5 flex flex-col items-start">Date</h3>
            <input
              className="text-sm p-5 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
          <div>
            <h3 className="w-2/5 flex flex-col items-start">Assign to</h3>
            <input
              className="text-sm p-5 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
              type="text"
              placeholder="Employee name"
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
            />
          </div>
          <div>
            <h3 className="w-2/5 flex flex-col items-start">Category</h3>
            <input
              className="text-sm p-5 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
              type="text"
              placeholder="design, dev, etc"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
          <button className="bg-emerald-500 w-full mt-5 p-5 hover:bg-emerald-600">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
