import React from "react";

const Skleton = ({ className }) => {
  return (
    <div className="animate-pulse">
      <div className={`bg-gray-200  rounded-md ${className}`}></div>
    </div>
  );
};

export default Skleton;
