import React from "react";

const AllTask = () => {
  return (
    <div
      id="allTask"
      className="bg-[#1c1c1c] p-5 rounded mt-5 h-80 overflow-auto"
    >
      <div className="bg-red-400 p-5 rounded flex mb-2 justify-between">
        <h2>User</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>

      <div className="bg-green-400 p-5 rounded flex mb-2 justify-between">
        <h2>User</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>

      <div className="bg-blue-400 p-5 rounded flex mb-2 justify-between">
        <h2>User</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>

      <div className="bg-yellow-400 p-5 rounded flex mb-2 justify-between">
        <h2>User</h2>
        <h3>Make a UI Design</h3>
        <h5>Status</h5>
      </div>
    </div>
  );
};

export default AllTask;
