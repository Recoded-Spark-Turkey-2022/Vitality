import React from 'react';
import { Link } from 'react-router-dom';
import EnrollHome from './Counselor/EnrollHome';

const Home = () => {
  return (
    <>
      <div>HOME</div>
      <Link to="/About">
        <button type="button">About!</button>
      </Link>
      <EnrollHome />
    </>
  );
};

export default Home;
