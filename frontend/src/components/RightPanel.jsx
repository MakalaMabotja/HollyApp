// RightPanel.jsx
import React from 'react';

const RightPanel = ({ children, isResultsPage}) => {
  return (
    <div className={`w-full ${isResultsPage ? 'md:w-1/4' : 'md:w-1/5'} h-auto p-2 overflow-y-auto justify-center items-center`}>
      {children}
    </div>
  );
};

export default RightPanel;
