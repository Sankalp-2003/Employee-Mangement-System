import React from "react";

function TaskListNumbers({ data }) {
  return (
    <div className="flex flex-wrap mt-10 justify-center gap-[20px] w-full">
      <div className=" p-10 rounded-xl w-[300px] bg-red-400 ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-lg font-medium">New Task</h3>
      </div>
      <div className=" p-10 rounded-xl w-[300px] bg-blue-400 ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-lg font-medium">Active Task</h3>
      </div>
      <div className=" p-10 rounded-xl w-[300px] bg-green-400 ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-lg font-medium">Completed Task</h3>
      </div>
      <div className=" p-10 rounded-xl w-[300px] bg-yellow-400 ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-lg font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumbers;
