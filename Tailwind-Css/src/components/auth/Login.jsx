import React from "react";
import LoginBox from "./LoginBox";

const Login = () => {
  return (
    <div className="flex place-content-center place-items-center">
      <div className="flex flex-wrap place-content-center  sm:p-5 sm:rounded-2xl">
        <div className="p-4 w-screen sm:w-100 h-100 flex  place-content-center place-items-center rounded-2xl">
          <img
            className="object-cover rounded-2xl h-100"
            src="https://i.pinimg.com/736x/a6/84/73/a68473a82c0ffec6f47f97774cc95ee9.jpg"
            alt="image not supported"
          />
        </div>
        <LoginBox></LoginBox>
      </div>
    </div>
  );
};

export default Login;
