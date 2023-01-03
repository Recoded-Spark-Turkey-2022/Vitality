import React from 'react';
import './editProfile.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import avatarIcon from '../../assets/Icon/avatar-icon.svg';

function EditProfile() {
  return (
    <>
      <p className="text-center w-100 edit-p p-3">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </p>
      <Container className="  mb-5  d-md-flex  justify-content-between pt-4">
        <Row className="justify-content-md-center col-md-4 ">
          <Col
            sm={12}
            className="d-flex flex-column align-items-center justify-content-start"
          >
            <Image
              className="fluid rounded-circle "
              src={avatar}
              alt="avatar"
            />
            <Image src={avatarIcon} className="avatar-icon " />
          </Col>
        </Row>
        <Row className="col-md-8 d-felx justify-content-md-center ">
          <Col>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={6} className="edit-header">
                  PROFILE INFO
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

              <Form.Group as={Row} className="mb-3" controlId="educationLevel">
                <Form.Label column sm={6}>
                  Education Level
                </Form.Label>
                <Col sm={6}>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="hobbbies">
                <Form.Label column sm={6}>
                  Hobbies
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="email" placeholder="" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="familySize">
                <Form.Label column sm={6}>
                  Family Size
                </Form.Label>
                <Col sm={1}>
                  <Form.Control type="email" placeholder="" />
                </Col>
                <Form.Label column sm={2}>
                  Member(s)
                </Form.Label>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="gender">
                <Form.Label column sm={6}>
                  Gender
                </Form.Label>
                <Col sm={6}>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
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
              <Form.Group as={Row} className="mb-3" controlId="uploadId">
                <Form.Label column sm={6}>
                  Upload ID
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="file" placeholder="" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={6} className="edit-header">
                  Security
                </Form.Label>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="password">
                <Form.Label column sm={6}>
                  Password
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="password" placeholder="" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="confirmPassword">
                <Form.Label column sm={6}>
                  Confirm Password
                </Form.Label>
                <Col sm={6}>
                  <Form.Control type="password" placeholder="" />
                </Col>
              </Form.Group>

              <Row>
                <Col className="d-flex justify-content-between">
                  <Link to="/edit-thanks">
                    <Button type="submit" className="btn-bg btn-text ">
                      SAVE CHANGES
                    </Button>
                  </Link>

                  <Button className="btn-bg btn-text" type="submit">
                    DELETE ACCOUNT
                  </Button>

                  <Button className="btn-bg btn-text" type="submit">
                    CANCEL
                  </Button>
                </Col>
              </Row>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column className="edit-header">
                  Payment Methods & Tickets
                </Form.Label>
              </Form.Group>

              <Col className="d-md-flex justify-content-between col-md-8 gap-3 ">
                <div>
                  <p className="pb-3">3 Cards Added</p>
                  <Button type="submit" className="btn-bg btn-text">
                    SHOW CARDS
                  </Button>
                </div>
                <div>
                  <p className="pb-3">10 Cards Remaining</p>

                  <Button className="btn-bg btn-text" type="submit">
                    BUY TİCKETS{' '}
                  </Button>
                </div>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditProfile;
