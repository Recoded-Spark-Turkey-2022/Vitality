/* eslint-disable no-console */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/fire';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../../assets/images/login-image.png';
import './login.css';
import LoginwithSocial from '../SignUp/loginwithSocial';

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const login = async () => {
    try {
      console.log('login');
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user.user));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="mb-5">
        <h1>LOGIN</h1>
      </div>
      <div className="row">
        <div className="col">
          <Card  className="w-75 h-100 border-0">
            <Form className="mt-5 mx-5 w-75 h-50">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder=" Your Password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </Form.Group>
              <Row>
              <Col className="d-flex justify-content-between">

                <Button
                  type="submit"
                  className="btn-login col " 
                  onClick={() => login()}>
                  Login
                </Button>

                <Link to="/sign-up" className="btn-signup col " >
                  Signup
                </Link>

                </Col>
              </Row>
            </Form>
            <LoginwithSocial />
          </Card>

     

        </div>
        <div className="col">
          <img src={Logo} alt="login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
