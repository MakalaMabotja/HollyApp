import React, { useState } from 'react';
import LeftPanel from '../../components/LeftPanel';
import CenterPanel from '../../components/CenterPanel';
import RightPanel from '../../components/RightPanel';
import SubmitButton from '../../components/SubmitButton';
import HollyBox from '../../components/HollyBox';
import PreferencesForm from './components/PreferencesForm';
import UserDetailsForm from './components/UserDetailsForm';

const Search = () => {
  // State for managing the user's name
  const [name, setName] = useState('');

  // Handler to update the user's name
  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <div className='hidden md:flex md:flex-row md:flex-wrap items-center h-screen'>
        <LeftPanel/>
        <CenterPanel>
          <HollyBox name={name} />
          <UserDetailsForm onNameChange={handleNameChange} />
          <PreferencesForm />
          <SubmitButton label="Submit" route="/results" />
        </CenterPanel>
        <RightPanel />
      </div>

      {/* Home page view for mobile */}
      <div className='flex flex-col items-center space-y-4 md:hidden'>
        <CenterPanel>
          <HollyBox name={name} />
          <UserDetailsForm onNameChange={handleNameChange} />
        </CenterPanel>
        <LeftPanel>
          <PreferencesForm />
        </LeftPanel>
        <RightPanel>
          <h2>Home Right Panel</h2>
          <p>Content for the right panel on the Home page.</p>
          <SubmitButton label="Submit" route="/results" />
        </RightPanel>
      </div>
    </div>
  );
};

export default Search;
