import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Search from './pages/Search/Search';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}
