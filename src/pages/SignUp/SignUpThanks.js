/* eslint-disable no-console */
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './signup.css';

function SignUpThanks() {
  return (
    <div className="container">
  <h1>THANK YOU!</h1>
<p>Your Sign Up request has been received, you will soon receive a confirmation email.<br />Please follow the steps in the email to complete and activate your account.</p>
<Link to="/"><Button variant="primary" className="button-signup" type="submit">
      BACK TO HOME 
      </Button></Link>
              
      </div>   
  );
}

export default SignUpThanks;
