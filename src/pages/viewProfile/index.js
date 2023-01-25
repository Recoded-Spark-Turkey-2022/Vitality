import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { collection, getDocs } from 'firebase/firestore';

import Image from 'react-bootstrap/Image';
import { db } from '../../config/fire';
import avatar from '../../assets/images/avatar.png';
import avatarIcon from '../../assets/Icon/avatar-icon.svg';

function ViewProfile() {
  const [userInfo, setUserInfo] = useState({});

  async function getUserProfile() {
    const user = localStorage.getItem('user');
    if (user != null) {
      const userObject = JSON.parse(user);
      const userCol = collection(db, 'users');
      const userSnapshot = await getDocs(userCol);
      const userData = userSnapshot.docs
        .map((doc) => doc.data())
        .find((userD) => userD.email === userObject.email);

      setUserInfo(userData);
    }
  }

  const space = ' ';

  useEffect(() => {
    getUserProfile();
    return () => {};
  }, []);

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
      {userInfo.email ? (
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
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={userInfo.name + space + userInfo.surname}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="fullName">
                <Form.Label column sm={6}>
                  Bio
                </Form.Label>
                <Col sm={6}>
                  <Form.Control as="textarea" value={userInfo.bio} />
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
                  <Form.Control type="email" placeholder="" value={userInfo.email}/>
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
      ) : (
        <div>
          <h1>no data</h1>
        </div>
      )}
    </Container>
  );
}

export default ViewProfile;
