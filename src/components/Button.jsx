import { InstagramLogo } from "phosphor-react";
import React from "react";

const Button = ({ children }) => {
  return (
    <button className="w-full flex justify-center items-center gap-5 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
