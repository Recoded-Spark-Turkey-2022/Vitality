/* eslint-disable no-console */
import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import {createUserWithEmailAndPassword} from "firebase/auth"
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import{auth} from "../../config/fire"
import SignUpImg from '../../assets/images/SignupImage.png';
import './signup.css';

function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  
  const register = async () => {
    try {
  
   const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword );
   console.log(user)
    }catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col m-5">
          <img src={SignUpImg} alt="sign up" />
        </div>
        <div className="col">
        <div className="mb-5">
        <h1>Sign Up Now</h1>
        
      </div>
          <Card>
            <Form>
                <Row>
              <Form.Group className="mb-3"  as={Col}  md="6" controlId="formName">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3"  as={Col}  md="6" controlId="formLastName">
                <Form.Control type="text" placeholder="Your Last Name" />           
              </Form.Group>
</Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder=" Your Email" onChange={(event) => {setRegisterEmail(event.target.value)}} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Control type="email" placeholder=" Confirm Email" />
              </Form.Group>
              <Row>
              <Form.Group className="mb-3"  as={Col}  md="6" controlId="formPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3"  as={Col}  md="6" controlId="formPassword1">
                <Form.Control type="password" placeholder="Confirm Password"  onChange={(event) => {setRegisterPassword(event.target.value)}}/>           
              </Form.Group>
</Row>

       <Form.Group as={Row} className="mb-3" controlId="birthDate">
                <Form.Label column sm={4}>
                Birth Date
              </Form.Label>   <Col sm={8}>
                <Form.Control type="date" placeholder="" />
              </Col></Form.Group>
              <Button  onClick={register} variant="primary" className="button-signup" type="submit">
                Submit
              </Button>
              
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
