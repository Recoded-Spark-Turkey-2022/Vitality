import React from 'react';
import EnrollHome from '../../components/Counselor/EnrollHome';
import HomeHelp from '../../components/Homepage/Help';
import HomeTherapist from '../../components/Homepage/HomeTherapist';

function Home() {
  return (
    <>
      <HomeHelp />
      <HomeTherapist />
      <EnrollHome />
    </>
  );
}

export default Home;
