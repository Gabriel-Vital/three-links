import React from "react";

const Button = ({ children, onClick, variant = "primary" }) => {
  function getVariantClasses() {
    switch (variant) {
      case "primary": return "w-full flex justify-center items-center gap-5 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer"
      case "secondary": return "cursor-pointer p-2 rounded-full hover:bg-gray-300 ease-in-out transition duration-300"
      default:
        return "bg-yellow-300 text-white"
    }
  }

  return (
    <a className="w-full" href="#">
      <button
        onClick={onClick}
        className={getVariantClasses()}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
