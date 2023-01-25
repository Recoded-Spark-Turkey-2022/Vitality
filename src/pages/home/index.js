import React from 'react'
import EnrollHome from "../../components/Counselor/EnrollHome"
import BookingHome from '../../components/Booking/BookingHome'
import SimpleSlider from '../../components/slider/Slider';

function Home() {
  return (
    <>
      <BookingHome />
      <EnrollHome/>
      <SimpleSlider />
    </>
  );
}

export default Home;
