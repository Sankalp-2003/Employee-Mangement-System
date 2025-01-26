import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded ">
      <form className="flex flex-wrap w-full  items-start justify-between ">
        <div className="w-1/2">
          <div>
            <h3 className="w-2/5 flex flex-col items-start">Task Title</h3>
            <input
              className="text-sm p-5 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="w-2/5 flex flex-col items-start">Date</h3>
            <input
              className="text-sm p-5 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
              type="date"
            />
          </div>
          <div>
            <h3 className="w-2/5 flex flex-col items-start">Assign to</h3>
            <input
              className="text-sm p-5 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="w-2/5 flex flex-col items-start">Category</h3>
            <input
              className="text-sm p-5 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400"></textarea>
          <button className="bg-emerald-500 w-full mt-5 p-5 hover:bg-emerald-600">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
