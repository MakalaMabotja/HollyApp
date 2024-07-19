// CenterPanel.jsx
import React from 'react';

const CenterPanel = ({ children }) => {
  return (
    <div className="w-full md:w-3/5 bg-white h-auto p-4 overflow-y-auto justify-center items-center">
      {children}
    </div>
  );
};

export default CenterPanel;
