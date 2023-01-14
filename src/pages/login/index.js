/* eslint-disable no-console */
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { signInWithEmailAndPassword,
        onAuthStateChanged} from 'firebase/auth';
import {auth} from "../../config/fire"

import  Logo  from '../../assets/images/login-image.png';
import './login.css';



function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const[setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword );
      console.log(user)
       }catch (error) {
         console.log(error.message);
       }
  }
  
  return (
    <div className="container">
      <div className='mb-5'>
        <h1>LOGIN</h1>
        
        <div className='mb-5'>
        <h4>User logged In</h4>
        
      </div>
      </div>
  <div className="row">
    <div className="col">
    <Card>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Your Email"  onChange={(event) => {setLoginEmail(event.target.value)}} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder=" Your Password" onChange={(event) => {setLoginPassword(event.target.value)}} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={login} >
       Login
      </Button>
      <Link to="/sign-up"><Button variant="secondary" type="submit">
      Signup 
      </Button></Link>
    </Form>
    </Card>
    </div>
    <div className="col">
    <img src={Logo} alt ="login" />
    </div>
  </div>
  
  </div>

  )
}

export default Login