import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-2 pt-[150px]">
      <div className="w-4 h-4 rounded-full animate-pulse bg-gray-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-gray-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-gray-600"></div>
    </div>
  );
};

export default Loading;
