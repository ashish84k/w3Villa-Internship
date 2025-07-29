import React from "react";
import Input from "./Input";
import Button from "./Button";
import OtpInput from "./OtpInput";

const Signup = () => {
  return (
    <div className="flex place-content-center place-items-center">
      <div className="flex flex-wrap place-content-center  sm:p-5 sm:rounded-2xl">
        <div className="p-4 w-screen sm:w-100 h-100 flex  place-content-center place-items-center rounded-2xl">
          <img
            className="object-cover rounded-2xl"
            src="https://i.pinimg.com/736x/f6/cb/03/f6cb037c2b7470108728ac0d3c7076b0.jpg"
            alt="image not supported"
          />
        </div>
        <div className="p-10 w-screen sm:w-100 rounded-2xl shadow-2xl">
          <form>
            <h1 className="p-4 m-4 text-center text-3xl font-bold">
              Create Account
            </h1>

            <Input
              name={"Number"}
              type="text"
              placeholder="Phone Number"
              id={"Number"}></Input>
                        
            <div className="flex place-content-center place-items-center">
                <Input
            name={"Password"}
            type="password"
            placeholder="Password"
            id={"Password"}></Input>
            <Input
            name={"Repeate Password"}
            type="password"
            placeholder="Repeate Password"
            id={"RepeatePassword"}></Input>
            </div>

            {/* <h2 className="text-center p-4">OTP</h2>
            <div className="flex place-content-center place-items-center">
                <OtpInput size={6}/>
            </div> */}

            <div className="mx-auto max-w-md p-6 bg-white">
              <Button className="w-full" type="submit"></Button>
            </div>
          </form>

          <h1 className="p-42m-2 text-center ">Other</h1>
          <div className="flex place-content-center place-items-center gap-4">
            <i className="fa-solid fa-phone bg-green-500 place-content-center rounded-full hover:cursor-pointer hover:text-white active:scale-x-90" style={{height:'30px',width:'30px'}}></i>
            <i className="fa-brands fa-google  bg-green-500 place-content-center  rounded-full hover:cursor-pointer hover:text-white active:scale-x-90"  style={{height:'30px',width:'30px'}}></i>
            <i className="fa-brands fa-facebook   bg-green-500 place-content-center  rounded-full hover:cursor-pointer hover:text-white active:scale-x-90" style={{height:'30px',width:'30px'}}></i>
            <i className="fa-brands fa-instagram  bg-green-500 place-content-center  rounded-full hover:cursor-pointer hover:text-white active:scale-x-90"  style={{height:'30px',width:'30px'}}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
