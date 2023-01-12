import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import BookingHomeImg from '../../assets/images/BookingHomeImg.png'
import BookingHomeBg from "../../assets/images/BookingHomeBg.png";

const BookingHome = () => {
  return (
    <div style={{ backgroundImage: `url(${BookingHomeBg})`,
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    top: 0, }}>
      
      <div className="flex flex-col pt-16  items-center md:flex-col   lg:flex-row    lg:justify-evenly lg:items-center md:items-center lg:pt-52  md:pt-28">
        <div className=" flex flex-col items-center   md:flex-col md:items-center  lg:items-center ">
          <p style={{fontFamily: "Poppins",fontWeight: 400,}} className="text-3xl md:text-4xl lg:text-5xl"> WE ARE HERE TO</p>
          <p style={{fontFamily: "Poppins"}} className="text-5xl  md:text-7xl lg:text-9xl ">HELP</p>
        </div>
        
        <div style={{position: "absolute",
width: "300px",
height: "60px",
left: "400px",
top: "675px",}} className="">
          <Link to="/booking">
            <Button variant="info">BOOK AN APPOINTMENT</Button>
          </Link>
        </div>

        <div className="h-2/3 w-2/3 md:h-1/3 md:w-1/3 lg:h-1/3 lg:w-1/3"> 
        <img
                src={BookingHomeImg}
                alt=" "
              />
        </div>
    
    </div>
    </div>
)};

export default BookingHome;
