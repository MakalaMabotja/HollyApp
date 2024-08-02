import React, { useState } from "react";

const Card = ({ title, children, expandableContent, price}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full flex flex-col  border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2 border border-gray-100 text-center">{title}</h2>
      <div className="flex justify-between items-center mb-4 p-4">
        <div className="w-2/3">
          {children}
        </div>
        <div className="w-1/5 aspect-square bg-blue-500 text-white flex items-center justify-center rounded-full ml-4">
          <span className="text-lg font-semibold">{price}</span>
        </div>
      </div>
      {isExpanded && <div className="mt-4">{expandableContent}</div>}
      <div className="flex items-center p-2 bg-white border-t border-gray-100 rounded-lg">
      <div className="flex-grow text-center">
          <span>Details</span>
        </div>
        <button
          className="px-1 hover:px-2 hover:py-1 transition-all ease-in justify-end bg-slate-50 text-gray-400 rounded-full focus:outline-none hover:bg-slate-400 hover:text-gray-200 text-xs ring-1 ring-gray-200"
          onClick={toggleExpand}
        >
          <span className="text-xs">
          {isExpanded ? '▲' : '▼'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
