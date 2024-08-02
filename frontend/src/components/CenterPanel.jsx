// CenterPanel.jsx
import React from 'react';

const CenterPanel = ({ children, isResultsPage }) => {
  return (
    <div className={`w-full ${isResultsPage ? 'md:w-1/2' : 'md:w-3/5'} h-auto p-2 overflow-y-auto justify-center items-center`}>
      {children}
    </div>
  );
};

export default CenterPanel;
