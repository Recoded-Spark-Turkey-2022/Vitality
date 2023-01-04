import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Image from 'react-bootstrap/Image';

import avatar from '../../assets/images/avatar.png';
import avatarIcon from '../../assets/Icon/avatar-icon.svg';

function ViewProfile() {
  return (
    <Container className="  mb-5  d-md-flex  justify-content-between pt-4">
      <Row className="justify-content-md-center col-md-4 ">
        <Col
          sm={12}
          className="d-flex flex-column align-items-center justify-content-start"
        >
          <Image className="fluid rounded-circle " src={avatar} alt="avatar" />
          <Image src={avatarIcon} className="avatar-icon " />
        </Col>
      </Row>
      <Row className="col-md-8 d-felx justify-content-md-center ">
        <Col>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={6} className="edit-header">
                THERAPIST INFO
              </Form.Label>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="fullName">
              <Form.Label column sm={6}>
                Full Name
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="email" placeholder="" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="fullName">
              <Form.Label column sm={6}>
                Bio
              </Form.Label>
              <Col sm={6}>
                <Form.Control as="textarea"  />
              </Col>
            </Form.Group>
       

            <Form.Group as={Row} className="mb-3" controlId="birthDate">
              <Form.Label column sm={6}>
                Birth Date
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="date" placeholder="" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="email">
              <Form.Label column sm={6}>
                Email
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="email" placeholder="" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="phoneNumber">
              <Form.Label column sm={6}>
                Phone Number
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="number" placeholder="" />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewProfile;
