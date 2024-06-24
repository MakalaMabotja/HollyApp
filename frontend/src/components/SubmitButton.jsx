import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitButton = ({ label, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button
      onClick={handleClick}
      className="w-20 h-10 bg-red-500 border border-maroon-700 text-white py-2 px-4 rounded-3xl hover:bg-red-600 hover:border-maroon-800 transition ease-in-out duration-150"
      style={{ margin: '0 auto', display: 'block' }} // Center the button
    >
      {label}
    </button>
  );
};

export default SubmitButton;
