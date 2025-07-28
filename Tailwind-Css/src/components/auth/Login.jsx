import React from "react";

const Login = () => {
  return (
    <div className="flex place-content-center place-items-center h-screen">
        <div className="flex flex-wrap shadow-2xl p-5 rounded-2xl">

        <div className="p-4  w-100 h-100 flex  place-content-center place-items-center rounded-2xl">
            <img  className="object-cover rounded-2xl" src="https://plus.unsplash.com/premium_photo-1700766408965-f73b16458fee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image not supported" />
        </div>
      <div className="p-4 w-100 rounded-2xl shadow-2xl">
        <h1 className="p-4 m-4 text-center text-3xl font-bold">Login Form</h1>
        <div className="mx-auto max-w-md p-2 bg-white">
          <label
            htmlFor="Username"
            className=" text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            id="Username"
            name="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mx-auto max-w-md p-2 bg-white">
          <label
            htmlFor="Username"
            className=" text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            id="Username"
            name="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mx-auto max-w-md p-6 bg-white">
         <button className="bg-green-500 m-2 p-3 pl-5 pr-5 rounded-2xl hover:bg-green-400 hover:cursor-pointer text-white font-bold active:scale-95">resete</button>
         <button className="bg-green-500 m-2 p-3 pl-5 pr-5 rounded-2xl hover:bg-green-400 hover:cursor-pointer text-white font-bold active:scale-95">Submit</button>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Login;
