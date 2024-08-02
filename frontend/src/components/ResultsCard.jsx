import React, { useState } from "react";

const Card = ({ title, children, expandableContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full min-h-20 flex flex-col mb-4 p-4 border border-gray-200 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="w-2/3">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          {children}
        </div>
        <button 
          className="w-1/3 h-1/3 bg-blue-500 text-white rounded-full p-2 text-center text-wrap"
          onClick={toggleExpand}
        >
          {isExpanded ? "Less Info" : "More Info"}
        </button>
      </div>
      {isExpanded && <div className="mt-4">{expandableContent}</div>}
    </div>
  );
};

export default Card;
