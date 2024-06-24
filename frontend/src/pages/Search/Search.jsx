import React from 'react';
import LeftPanel from '../../components/LeftPanel';
import CenterPanel from '../../components/CenterPanel';
import RightPanel from '../../components/RightPanel';
import Chatbox from '../../components/Chatbox';

const Search = () => {
  return (
    <>
      <LeftPanel>
        <h2>Search Left Panel</h2>
        <p>Content for the left panel on the Search page.</p>
      </LeftPanel>
      <CenterPanel>
        <Chatbox />
        <h2>Search Center Panel</h2>
        <p>Content for the center panel on the Search page.</p>
      </CenterPanel>
      <RightPanel>
        <h2>Search Right Panel</h2>
        <p>Content for the right panel on the Search page.</p>
      </RightPanel>
    </>
  );
};

export default Search;
