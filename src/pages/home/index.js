import React from 'react';
import EnrollHome from '../../components/Counselor/EnrollHome';
import Communicate from '../../components/Homepage/Communicate';
import HomeHelp from '../../components/Homepage/Help';
import HomeTherapist from '../../components/Homepage/HomeTherapist';

function Home() {
  return (
    <>
      <HomeHelp />
      <HomeTherapist />
      <Communicate />
      <EnrollHome />
    </>
  );
}

export default Home;
