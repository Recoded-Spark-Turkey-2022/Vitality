import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EnrollHome = () => {
  return (
    <Container className="shadow-sm p-3 mb-5 bg-white rounded">
      <Row className="justify-content-md-center">
        <Col sm={6}>
          <h1>ARE YOU A CONSELOR?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Interested in joining our mental health platform? You decide your
            schedule and how much you want to work, we’ll take care of the
            client referrals and billing details!
          </p>
        </Col>
      </Row>
      <Row>
        <Col> </Col>
        <Col className="justify-content-center">
          <Link to="/requirements">
            <Button variant="info">Learn More</Button>
          </Link>
        </Col>

        <Col> </Col>
      </Row>
    </Container>
  );
};

export default EnrollHome;
