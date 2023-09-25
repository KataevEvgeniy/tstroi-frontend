import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="px-4 py-3 rounded border border-black border-opacity-30 text-gray-600 text-xl"
    />
  );
};

export default Input;
