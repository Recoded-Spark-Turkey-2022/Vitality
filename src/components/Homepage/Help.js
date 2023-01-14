import React from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import './help.css';
import homepageHelp from '../../assets/images/homepageHelp.png';
import helpBackground from '../../assets/images/helpBackground.png';

const HomeHelp = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center container-height"
      style={{
        backgroundImage: `url(${helpBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Row className=" py-1">
        <Col
          sm={12}
          md={6}
          className="row justify-content-center text-center p-2"
        >
          <Col className="justify-content-center text-center">
            <Row className="justify-content-center text-center">
              <Col xs={6}>
                <h4>WE ARE HERE TO</h4>
              </Col>
            </Row>
            <Row className="justify-content-center text-center ">
              <Col xs={6}>
                <h1>HELP</h1>
              </Col>
            </Row>
          </Col>
          <Row className="d-flex justify-content-center">
            <Col>
              <Button variant="info" size="lg">
                Book an appointment
              </Button>
            </Col>
          </Row>
        </Col>

        <Col className="pt-4" sm={12} md={6}>
          <Image
            src={homepageHelp}
            className="img-fluid shadow-2-strong"
            alt=" "
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeHelp;
