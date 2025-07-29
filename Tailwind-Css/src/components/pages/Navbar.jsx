import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 ">
      <ul>
        <li className="text-4xl font-bold">Ui Ai</li>
      </ul> 
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth/signup"className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-700"
            }>Signup</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
