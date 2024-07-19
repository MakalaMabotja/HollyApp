import React, { useState } from 'react';
import FormComponent from '../../../components/Forms';

const UserDetailsForm = ({ onNameChange }) => {
    const [name, setName] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleBlur = () => {
      onNameChange(name);
    };
  
  return (
    <FormComponent title="Let me get some basic details about you">
      <div className="flex flex-col md:flex-row md:col-span-2 md:w-3/4 md:items-center md:justify-center md:mx-auto">
        <label htmlFor="name" className="mb-2 md:mb-0 md:mr-4 font-medium">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Who should I call you?"
          onChange={handleNameChange}
          onBlur={handleBlur} 
          className="p-2 border border-gray-300 rounded-md flex-1"
        />
      </div>
      <div className="flex flex-col md:flex-row md:col-span-2 md:w-3/4 md:items-center md:justify-center md:mx-auto">
        <label htmlFor="home-country" className="mb-2 md:mb-0 md:mr-4 font-medium">Home Country:</label>
        <input
          id="home-country"
          type="text"
          placeholder="Where are you from?"
          className="p-2 border border-gray-300 rounded-md flex-1"
        />
      </div>
      <div className="flex flex-col md:flex-row md:col-span-2 md:w-3/4 md:items-center md:justify-center md:mx-auto">
        <label htmlFor="budget" className="mb-2 md:mb-0 md:mr-4 font-medium">Budget:</label>
        <input
          id="budget"
          type="number"
          placeholder="How much would you like to spend?"
          className="p-2 border border-gray-300 rounded-md flex-1"
        />
      </div>
    </FormComponent>
  );
};

export default UserDetailsForm;
