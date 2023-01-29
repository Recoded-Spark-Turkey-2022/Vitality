import React from "react"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import avatarIcon from '../../assets/images/avatarIcon.png';
import './TherapistHome.css';


const TherapistHome = () => {
    return (
        <div>
        <div className="bg-amber-200 pb-16 font-poppins">
            <h1 className="tracking-wider lg:text-5xl text-lg font-bold lg:w-7/12 lg:font-poppins lg:pt-20 pt-20 pl-16 sm:p-16 sm:font-poppins">
            PROFESSIONAL, LICENSED, AND VETTED THERAPISTS THAT YOU CAN TRUST
            </h1>
            <img className="h-3/4 w-3/4 pt-16 pb-16 pl-16" src={avatarIcon} alt="therapists" />
            <p className="pl-16 pr-16 lg:text-2xl font-poppins text-sm lg:w-8/12 lg:pb-20 sm:pb-16">
                Tap into the world&apos;s largest network of licensed,
                accredited, and experienced therapists who can help you with a
                range of issues including depression, anxiety, relationships,
                trauma, grief, and more. with our therapists, you get the same
                professionalism and quality you would expect from an in-office
                therapist, but with the ability to communicate whenever and
                however you want.
            </p>
            <Link to="/booking">
                <Button variant="info" className="m-12 text-md md:text-lg ml-16 lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500">Book an appointment</Button>
            </Link>
        </div>
        </div>
    );
  };

export default TherapistHome