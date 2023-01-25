import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <Container className="shadow-sm p-3 mb-5 bg-white rounded">
      <h1>Thank You!</h1>
      <p className="text-secondary">
        Thank you for your interest in working with Healing, we have recieved
        your application.You will receive an email guiding you for the next
        steps soon after your information is reviewed.
      </p>

      <Link to="/">
        <Button variant="info" className="text-uppercase">
          Back to Home
        </Button>
      </Link>
    </Container>
  );
};

export default ThankYou;
