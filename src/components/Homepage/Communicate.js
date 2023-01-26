import React from 'react';
import './communicate.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Communicate = () => {
  return (
    <Container>
      <Row>
        <Col className="p-4">
          <h1 className="header-padding">WE CAN COMMUNICATE THROUGH</h1>
        </Col>
      </Row>{' '}
      <Row className="d-flex align-items-center justify-content-center">
        <Col xs={4} className="col-width">
          <Card className="card-heigt">a</Card>
        </Col>
        <Col xs={4} className="col-width">
          <Card className="card-heigt">b</Card>
        </Col>
        <Col xs={4} className="col-width">
          <Card className="card-heigt">c</Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Communicate;
