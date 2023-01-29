import React from 'react'
import EnrollHome from "../../components/Counselor/EnrollHome"
import BookingHome from '../../components/Booking/BookingHome'
import SimpleSlider from '../../components/slider/Slider';
import ContactCard from '../../components/ContactCard/ContactCard'
import PurchaseHome from '../../components/Purchase/PurchaseHome'
import TherapistHome from '../../components/TherapistHome/TherapistHome'

function Home() {
  return (
    <>
      <BookingHome />
      <TherapistHome />
      <ContactCard />
      <SimpleSlider />
      <PurchaseHome />
      <EnrollHome/>
    </>
  );
}

export default Home;
