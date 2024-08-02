import React, { useState } from 'react';
import FormComponent from '../../../components/Forms';
import Chatbox from '../../../components/Chatbox';

const holidayPreferences = [
  'Go Backpacking',
  'See The Nightlife',
  'Be One With Nature',
  'Spend Time At The Beach',
  'Partake In Adventure Sports',
  'Cultural Exploration',
  'Food & Wine Tours',
  'Relaxation Getaway',
  'City Tour',
  'Boat Cruise',
];

const PreferencesForm = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const handleCheckboxChange = (preference) => {
    setSelectedPreferences((prev) => 
      prev.includes(preference)
        ? prev.filter((item) => item !== preference)
        : [...prev, preference]
    );
  };

  return (
    <FormComponent title="What do you feel like doing on your next holiday?" className="justify-center items-center flex flex-col">
      
          {holidayPreferences.map((preference, index) => (
            <div className='flex flex-col justify-center md:flex-1 md:w-full'>
            <label key={index} className="inline-flex items-center">
            <input
                id={preference}
                type="checkbox"
                className="form-checkbox"
                value={preference}
                checked={selectedPreferences.includes(preference)}
                onChange={() => handleCheckboxChange(preference)}
            />
            <span className="ml-2">{preference}</span>
            </label>
            </div>
      ))}
      <div className='md:col-span-2'>
        <Chatbox/>
      </div>
    </FormComponent>
  );
};

export default PreferencesForm;