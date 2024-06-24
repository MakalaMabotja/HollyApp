import React from 'react';
import LeftPanel from '../../components/LeftPanel';
import CenterPanel from '../../components/CenterPanel';
import RightPanel from '../../components/RightPanel';
import Chatbox from '../../components/Chatbox';

const Home = () => {
  return (
    <>
      <LeftPanel>
        <h2>Home Left Panel</h2>
        <p>Content for the left panel on the Home page.</p>
      </LeftPanel>
      <CenterPanel>
        <Chatbox />
        <h2>Home Center Panel</h2>
        <p>Content for the center panel on the Home page.</p>
      </CenterPanel>
      <RightPanel>
        <h2>Home Right Panel</h2>
        <p>Content for the right panel on the Home page.</p>
      </RightPanel>
    </>
  );
};

export default Home;
