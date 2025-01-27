import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = ({ changeUser }) => {
  // const [userName, setUserName] = useState("");
  // if (!data) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    console.log(changeUser);
    changeUser("");
  };

  return (
    <>
      <div className="flex items-end justify-between ">
        <h1 className="text-2xl">
          Hello <br /> <span className="text-3xl font-semibold ">userName</span>
          🖐️
        </h1>
        <button
          className="bg-red-500 text-lg font-medium cursor-pointer text-white px-5 py-2 rounded-sm "
          onClick={logOutUser}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Header;
