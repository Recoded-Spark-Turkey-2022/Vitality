import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import EnrollHome from './components/Counselor/EnrollHome';
import Requirements from './components/Counselor/Requirements';
import CreateAccount from './components/Counselor/CreateAccount';
import ThankYou from './components/Counselor/ThankYou';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enroll-home" element={<EnrollHome />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/thankYou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
