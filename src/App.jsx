import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layouts/MainLayout';
import About from './pages/about';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/notFound';
import Team from './pages/team';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} exact />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about"  element={<About />} />
        <Route path="/team"  element={<Team/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/login"  element={<Login/>} />


        <Route component={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
