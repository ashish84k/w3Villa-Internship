import React, { useState } from "react";

const Input = ({
  className,
  value,
  placeholder = "",
  type = "text",
  name,
  id
}) => {
  const [showPassword, setShowPassword] = useState(false);


  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="mx-auto max-w-md p-2 relative">
      <label htmlFor={id} className="text-gray-700 font-semibold mb-2 block">
        {name}
      </label>

      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        className={`${className} w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />

      {type === "password" && (
        <i
          className={`fa-solid ${
            showPassword ? "fa-eye-slash" : "fa-eye"
          } absolute right-4 top-[65%] transform -translate-y-1/2 text-2xl bg-white text-gray-600 cursor-pointer`}
          onClick={() => setShowPassword((prev) => !prev)}
        ></i>
      )}
    </div>
  );
};

export default Input;
