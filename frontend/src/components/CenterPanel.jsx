// CenterPanel.jsx
import React from 'react';

const CenterPanel = ({ children }) => {
  return (
    <div className="w-1/2 bg-white h-screen p-4 overflow-y-auto">
      {children}
    </div>
  );
};

export default CenterPanel;
