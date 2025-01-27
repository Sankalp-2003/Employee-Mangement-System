import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div id="allTask" className="bg-[#1c1c1c] p-5 rounded mt-5 h-80">
      <div className="bg-[#444] p-5 rounded flex mb-2 justify-between">
        <h2 className="w-1/5  ">Employee Name</h2>
        <h3 className="w-1/5 ">New</h3>
        <h5 className="w-1/5 ">Active</h5>
        <h5 className="w-1/5 ">Completed</h5>
        <h5 className="w-1/5 ">Failed</h5>
      </div>
      <div id="allTaskEmp" className="h-[80%]  overflow-auto ">
        {userData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className=" p-5 rounded flex mb-2 justify-between border-[1px] border-emerald-500"
            >
              <h2 className="w-1/5  ">{elem.firstName}</h2>
              <h3 className="w-1/5 font-bold   text-blue-600">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 font-bold text-yellow-400">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 font-bold text-green-600">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 font-bold text-red-600">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
