import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import requirementsImg from './images/requirements-img.png';

const Requirements = () => {
  return (
    <Container className="shadow-sm p-3 mb-5 bg-white rounded">
      <Row>
        <Col>
          <h1>WHY WORK WITH HEALING?</h1>
        </Col>
      </Row>

      <Row>
        <Col className="col-md-6">
          <Row>
            <h6 className="text-uppercase">Reliable Income</h6>
            <p className="text-secondary">
              Over 10,000 people sign up on BetterHelp every day looking for a
              counselor to help with life&apos;s challenges. BetterHelp can be
              your main source of income &#40;&quot;full time&quot;&#41; or a
              supplement to your current work.
            </p>
          </Row>
          <Row>
            <h6 className="text-uppercase">Focus on Counseling</h6>
            <p className="text-secondary">
              No need to worry about costs from acquiring clients, billing,
              support or operations. Let us handle the fees and paperwork so you
              can focus on what you do best!
            </p>
          </Row>
          <Row>
            <h6 className="text-uppercase">Focus on Counseling</h6>
            <p className="text-secondary">
              No need to worry about costs from acquiring clients, billing,
              support or operations. Let us handle the fees and paperwork so you
              can focus on what you do best!
            </p>
          </Row>
          <Row>
            <h4 className="text-uppercase">Requirements</h4>
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="list-group-item text-secondary border-0"
              >
                Licensed by a State Board to provide counseling
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="list-group-item text-secondary border-0"
              >
                Experience in counseling for adults, couples, and/or teens
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="list-group-item text-secondary border-0"
              >
                Excellent writing skills
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="list-group-item text-secondary border-0"
              >
                Reliable Internet connection
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="list-group-item text-secondary border-0"
              >
                Currently residing in the US
              </ListGroup.Item>
            </ListGroup>
          </Row>
          <Col>
            <Link to="/createAccount">
              <Button className="text-uppercase" variant="info">
                Get started
              </Button>
            </Link>
          </Col>
        </Col>
        <Col>
          <Row> </Row>
          <Row>
            <img
              src={requirementsImg}
              className="col-6 img-fluid shadow-2-strong"
              alt=" "
            />
          </Row>
          <Row> </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Requirements;
