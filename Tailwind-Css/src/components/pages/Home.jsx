import React from "react";
import LoginBox from "../auth/LoginBox";

const Home = () => {
    
  return (
    <>
      {/* First Section */}
      <div className=" z-10 flex flex-col md:flex-row items-center sticky top-0 justify-center p-5 h-[100vh] bg-white">
        <div className="text-center mb-5 md:mb-0">
          <img
            className="object-cover h-100 w-auto mx-auto"
            src="https://i.pinimg.com/1200x/da/87/6f/da876f5eb493d16b5875a8c10816fc5b.jpg"
            alt="your browser not support"
          />
          <h1
            className="text-5xl md:text-7xl font-bold animate-pulse mt-4"
            style={{ letterSpacing: "20px" }}
          >
            UI Ai Designer
          </h1>
        </div>
        <div
          className="scale-95 rotate-3 hidden md:block ml-10 hover:animate-pulse"
          style={{ animationIterationCount: "2" }}
        >
          <LoginBox/>
        </div>
      </div>

      <div className="relative z-50 flex items-center place-content-center p-5 h-[100vh] bg-white">
        <div className="">
            <img className={`shadow-2xl rotate-[0deg] h-100 top-50 rounded-2xl absolute`} src="https://i.pinimg.com/736x/db/b1/ab/dbb1ab9e0cb25fb85f8b81c8fc67f882.jpg" alt="your browser not supported" />
            <img className={`shadow-2xl rotate-[10deg] h-100 top-50 rounded-2xl absolute`} src="https://i.pinimg.com/736x/24/fe/c5/24fec5f5dab38c29f2104048ccdaaf98.jpg" alt="your browser not supported" />
            <img className={`shadow-2xl rotate-[20deg] h-100 top-50 rounded-2xl absolute`} src="https://i.pinimg.com/736x/3d/88/6c/3d886c40165cf041cb1f1c9428b978b1.jpg" alt="your browser not supported" />
            <img className={`shadow-2xl rotate-[-10deg] h-100 top-50 rounded-2xl absolute`} src="https://i.pinimg.com/736x/e4/b0/8b/e4b08b9db5b888f4b0e576c5944aa44a.jpg" alt="your browser not supported" />
            <img className={`shadow-2xl rotate-[-20deg] h-100 top-50 rounded-2xl absolute`} src="https://i.pinimg.com/736x/a0/c7/b7/a0c7b7430f9320a1e286f2a90d1fe7fd.jpg" alt="your browser not supported" />
        </div>
        <h1 className="text-4xl font-bold ">Hello</h1>
      </div>
    </>
  );
};

export default Home;
