import React from 'react';
import Input from "./Input";

const LoginBox = () => {
    return (
        <>
        <div className="p-10 w-screen sm:w-100 rounded-2xl shadow-2xl">
          <h1 className="p-4 m-4 text-center text-3xl font-bold">Login Form</h1>

            <Input
            name={"Number"}
            type="text"
            placeholder="Phone Number"
            id={"Number"}></Input>


          <Input
            name={"Password"}
            type="password"
            placeholder="Password"
            id={"Password"}></Input>



          <div className="mx-auto max-w-md p-6 bg-white">
            <button className="bg-green-500 m-2 p-3 pl-5 pr-5 rounded-2xl hover:bg-green-400 hover:cursor-pointer text-white font-bold active:scale-95">
              resete
            </button>

            
            <button className="bg-green-500 m-2 p-3 pl-5 pr-5 rounded-2xl hover:bg-green-400 hover:cursor-pointer text-white font-bold active:scale-95">
              Submit
            </button>

            <h1 className="p-4 m-4 text-center ">Other Option</h1>

            <div className="flex place-content-center place-items-center gap-4">
              <i
                className="fa-solid fa-phone bg-green-500 place-content-center rounded-full hover:cursor-pointer hover:text-white active:scale-x-90"
                style={{ height: "30px", width: "30px" }}></i>
              <i
                className="fa-brands fa-google  bg-green-500 place-content-center  rounded-full hover:cursor-pointer hover:text-white active:scale-x-90"
                style={{ height: "30px", width: "30px" }}></i>
              <i
                className="fa-brands fa-facebook   bg-green-500 place-content-center  rounded-full hover:cursor-pointer hover:text-white active:scale-x-90"
                style={{ height: "30px", width: "30px" }}></i>
              <i
                className="fa-brands fa-instagram  bg-green-500 place-content-center  rounded-full hover:cursor-pointer hover:text-white active:scale-x-90"
                style={{ height: "30px", width: "30px" }}></i>
            </div>
          </div>
        </div>
        </>
    );
}

export default LoginBox;
