import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';
import EditThanks from './components/editThanks/EditThanks';
import MainLayout from './components/layouts/MainLayout';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import EditProfile from './pages/editProfile';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/notFound';
import Requirements from './pages/requirements';
import Team from './pages/team';
import ViewProfile from './pages/viewProfile';

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
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} exact />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about"  element={<About />} />
        <Route path="/team"  element={<Team/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/requirements"  element={<Requirements/>} />
        <Route path="/edit-profile"  element={<EditProfile/>} />
        <Route path="/view-profile"  element={<ViewProfile/>} />
        <Route path="/edit-thanks"  element={<EditThanks/>} />



        <Route component={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
