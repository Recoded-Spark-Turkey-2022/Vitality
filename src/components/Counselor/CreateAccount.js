import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { createUser } from '../../config/fire';

const CreateAccount = () => {
  const [registerForm, setregisterForm] = useState({});
  function submit() {
    createUser(registerForm);
  }
  return (
    <Container className="shadow-sm p-3 mb-5 bg-white rounded">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="text-secondary">User Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setregisterForm({ ...registerForm, fullName: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-secondary">Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setregisterForm({ ...registerForm, email: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label className="text-secondary">City</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setregisterForm({ ...registerForm, city: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLicenceNumber">
          <Form.Label className="text-secondary">Licence Number</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setregisterForm({
                ...registerForm,
                licenceNumber: e.target.value,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-secondary">Create Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              setregisterForm({ ...registerForm, password: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-secondary">Confirm Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button
          variant="info"
          type="submit"
          onClick={() => {
            submit();
          }}
        >
          <Link to="/thankYou">Create</Link>
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAccount;
