import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import BookingHomeImg from '../../assets/images/BookingHomeImg.png'

const BookingHome = () => {
  return (
    <div className="shadow-sm p-3 mb-5 bg-white">
      <div>
          <h2>
            WE ARE HERE TO
          </h2>
          <h1>HELP</h1>
        </div>
    
        <div>
          <Link to="/booking">
            <Button variant="info">Book an Appointment</Button>
          </Link>
        </div>

        <div className="justify-content-center"> 
        <img
                src={BookingHomeImg}
                alt=" "
              />
        </div>
    
    </div>
  );
};

export default BookingHome;
