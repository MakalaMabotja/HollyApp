// LeftPanel.jsx
import React from 'react';

const LeftPanel = ({ children }) => {
  return (
    <div className="w-full md:w-1/5 h-auto p-4 overflow-y-auto  justify-center items-center">
      {children}
    </div>
  );
};

export default LeftPanel;
