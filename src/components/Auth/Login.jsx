import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openEye, setOpenEye] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);
    setEmail("");
    setPassword("");
  };
  const handleEye = () => {
    setOpenEye(!openEye);
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-emerald-600 outline-none bg-transparent placeholder:text-gray-400 rounded-full py-3 px-5 text-xl"
            type="email"
            required
            placeholder="Enter your email"
          />
          <div className="password relative">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="border-2 mt-5 border-emerald-600 outline-none bg-transparent placeholder:text-gray-400 rounded-full py-3 px-5 text-xl"
              type={openEye ? "text" : "password"}
              required
              placeholder="Enter password"
            />
            <div
              onClick={handleEye}
              className="eye cursor-pointer text-gray-400 absolute top-6 right-5 text-lg"
            >
              {openEye ? <IoEyeSharp /> : <FaEyeSlash />}
            </div>
          </div>
          <button className="mt-5 w-full border-none bg-emerald-600 outline-none placeholder:text-white rounded-full py-3 px-5 text-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
