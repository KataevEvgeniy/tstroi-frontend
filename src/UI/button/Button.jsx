import React from "react";

const Button = ({ children, color, ...props }) => {
  return (
    <button {...props} className="bg-blue-700 rounded py-3 px-2">
      {children}
    </button>
  );
};

export default Button;
