import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-end justify-between ">
        <h1 className="text-2xl">
          Hello <br /> <span className="text-3xl font-semibold ">User</span>🖐️
        </h1>
        <button className="bg-red-500 text-lg font-medium cursor-pointer text-white px-5 py-2 rounded-sm ">
          Log out
        </button>
      </div>
    </>
  );
};
// 38
export default Header;
