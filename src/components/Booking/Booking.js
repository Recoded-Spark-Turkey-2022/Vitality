import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Card from './Card';

const Booking = () => {
  const [question, setQuestion] = useState(0);
  const handleClick = (arg) => {
    if (arg === 'inc' && question < 2) {
      setQuestion((prev) => prev + 1);
    } else if (arg === 'dec' && question > 0) {
      setQuestion((prev) => prev - 1);
    }
  };

  const stages = [
    {
      title: 'Çağla',
      values: ['1', '2'],
    },
    {
      title: 'Tarteel',
      values: ['3', '4'],
    },
    {
      title: 'Seda',
      values: ['5', '6'],
    },
  ];
  
  return (
    <>
      <Link to="/">Home</Link>

      <h1>{stages[question].title}</h1>

      <Card item={stages[question]} />

      <button type="button" onClick={() => handleClick('dec')}>
        Back
      </button>
      {'       '}
      <button type="button" onClick={() => handleClick('inc')}>
        Next
      </button>
    </>
  );
};
  
  export default Booking;

