import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import avatarIcon from '../../assets/Icon/videoCall.png';
import './homeTherapist.css';

const HomeTherapist = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center back-ground-yellow"
    >
      <Row className="row p-5">
        <Col>
          <Row>
            <Col>
              <h1>
                PROFESSIONAL, LICENSED, AND VETTED THERAPISTS THAT YOU CAN TRUST
              </h1>
            </Col>
          </Row>
          <Row className="p-4">
            <Col xs={4} md={2} className="">
              <Image roundedCircle src={avatarIcon} className="avatar-icon" />
            </Col>
            <Col xs={4} md={2} className="">
              <Image roundedCircle src={avatarIcon} className="avatar-icon" />
            </Col>
            <Col xs={4} md={2} className="">
              <Image roundedCircle src={avatarIcon} className="avatar-icon" />
            </Col>
            <Col xs={4} md={2} className="">
              <Image roundedCircle src={avatarIcon} className="avatar-icon" />
            </Col>
            <Col xs={4} md={2} className="">
              <Image roundedCircle src={avatarIcon} className="avatar-icon" />
            </Col>
            <Col xs={4} md={2}>
              <Image roundedCircle src={avatarIcon} className="avatar-icon" />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Tap into the world&apos;s largest network of licensed,
                accredited, and experienced therapists who can help you with a
                range of issues including depression, anxiety, relationships,
                trauma, grief, and more. with our therapists, you get the same
                professionalism and quality you would expect from an in-office
                therapist, but with the ability to communicate whenever and
                however you want.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="info">Book an appointment</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeTherapist;
