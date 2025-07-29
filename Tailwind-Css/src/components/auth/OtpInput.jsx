import React from "react";

const OtpInput = ({
  className,
  value,
  placeholder = "",
  type = "text",
  name,
  id,
  size = 1
}) => {
  const inputs = [];

  for (let i = 0; i < size; i++) {
    inputs.push(
      <input
        key={i}
        type={type}
        placeholder={placeholder}
        value={value}
        id={`${id}-${i}`} // unique id
        name={`${name}-${i}`} // unique name
        className={`${className} w-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center`}
        maxLength={1}
      />
    );
  }

  return (
    <div className="flex gap-2 justify-center items-center p-2">
      {inputs}
    </div>
  );
};

export default OtpInput;
