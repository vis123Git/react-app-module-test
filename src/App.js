import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
