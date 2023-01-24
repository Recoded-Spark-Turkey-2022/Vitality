import React from 'react';

import { Route, Routes ,BrowserRouter} from 'react-router-dom';

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
import Team from './pages/team';
import ViewProfile from './pages/viewProfile';

import EnrollHome from './components/Counselor/EnrollHome';
import Requirements from './components/Counselor/Requirements';
import CreateAccount from './components/Counselor/CreateAccount';
import ThankYou from './components/Counselor/ThankYou';
import Booking from "./components/Booking/Booking";
import BookingHome from './components/Booking/BookingHome';
import Card2 from "./components/Booking/Cards/Card2";
import Card3 from "./components/Booking/Cards/Card3";
import Card4 from "./components/Booking/Cards/Card4";
import Card5 from "./components/Booking/Cards/Card5";
import Card6 from "./components/Booking/Cards/Card6";
import Card7 from "./components/Booking/Cards/Card7";
import Card8 from "./components/Booking/Cards/Card8";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/enroll-home" element={<EnrollHome />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/thankYou" element={<ThankYou />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-home" element={<BookingHome />} />
        <Route path="/card2" element={<Card2 />} />
        <Route path="/card3" element={<Card3 />} />
        <Route path="/card4" element={<Card4 />} />
        <Route path="/card5" element={<Card5 />} />
        <Route path="/card6" element={<Card6 />} />
        <Route path="/card7" element={<Card7 />} />
        <Route path="/card8" element={<Card8 />} />


        <Route component={<NotFound/>} />
      </Route>
    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
