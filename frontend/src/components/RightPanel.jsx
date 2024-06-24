// RightPanel.jsx
import React from 'react';

const RightPanel = ({ children }) => {
  return (
    <div className="w-1/4 h-screen p-4 overflow-y-auto">
      {children}
    </div>
  );
};

export default RightPanel;
