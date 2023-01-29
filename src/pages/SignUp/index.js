import React, { useState }  from 'react'
import Button from 'react-bootstrap/Button';
import {createUserWithEmailAndPassword} from "firebase/auth"
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { collection, addDoc } from "firebase/firestore"; 
import LoginwithSocial from './loginwithSocial';
import { auth, db } from "../../config/fire";
import SignUpImg from '../../assets/images/SignupImage.png';
import './signup.css';


function SignUp() {
  
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerSurname, setRegisterSurname] = useState("");
  const [registerbirthDate, setRegisterbirthDate] = useState("");
  const register  = async (e) => { 
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword );
     e.preventDefault();
    addDoc(collection(db, "users"), {
      name:registerName,
      email:registerEmail,
      surname:registerSurname,
      password: registerPassword,
      birthdate: registerbirthDate
    })
  
    .then(() => {
      window.location.href='/sign-up-thanks'
    })
    .catch((error) => {
      alert(error.message);
    });
   
    setRegisterName('');
    setRegisterEmail('');
    setRegisterSurname('');
    setRegisterPassword('');
    setRegisterbirthDate('');
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col m-5">
          <img src={SignUpImg} alt="sign up" />
        </div>
        <div className="col">
        <div className="mb-2">
        <h1>SIGNUP NOW</h1>
        
      </div>
      <Card  className="w-100 h-100 border-0">
            <Form className="mt-5 mx-5 w-75 h-50 ">
                <Row>
               
              <Form.Group className="mb-3"   as={Col}  md="6" controlId="formName">
                <Form.Control  type="text" required placeholder="Your Name"  onChange={(event) => {setRegisterName(event.target.value)}} />
              </Form.Group>
              <Form.Group className="mb-3"  as={Col}  md="6" controlId="formLastName">
                <Form.Control type="text" required placeholder="Your Last Name"  onChange={(event) => {setRegisterSurname(event.target.value)}} />           
              </Form.Group>
</Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" required placeholder=" Your Email" onChange={(event) => {setRegisterEmail(event.target.value)}} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Control type="email" required placeholder=" Confirm Email"  />
              </Form.Group>
              <Row>
              <Form.Group className="mb-3"  as={Col}  md="6" controlId="formPassword">
                <Form.Control type="password" required placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3"  as={Col}  md="6" controlId="formPassword1">
                <Form.Control type="password"  required placeholder="Confirm Password"  onChange={(event) => {setRegisterPassword(event.target.value)}}/>           
              </Form.Group>
</Row>

       <Form.Group as={Row} className="mb-3"  controlId="birthDate">
                <Form.Label column sm={4}>
                Birth Date
              </Form.Label>   <Col sm={8}>
                <Form.Control required type="date" placeholder=""  onChange={(event) => {setRegisterbirthDate(event.target.value)}} />
              </Col></Form.Group>
            <Button  onClick={register}  variant="signup" className="btn-signup bg-info" type="submit"> 
          Submit
              </Button>
               <LoginwithSocial />
            </Form>
          </Card>
        </div>
      </div>
    </div>
   
  );
}
export default SignUp; 
