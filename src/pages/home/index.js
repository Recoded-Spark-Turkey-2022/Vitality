import React from 'react'
import EnrollHome from "../../components/Counselor/EnrollHome"
import BookingHome from '../../components/Booking/BookingHome'
import SimpleSlider from '../../components/slider/Slider';
import ContactCard from '../../components/ContactCard/ContactCard'

function Home() {
  return (
    <>
      <BookingHome />
      <ContactCard />
      <SimpleSlider />
      <EnrollHome/>
    </>
  );
}

export default Home;
