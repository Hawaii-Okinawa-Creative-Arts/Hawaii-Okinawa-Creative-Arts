import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const TopCard = () => (
  <footer>
    <Container className='topcard'>
      <Row id='landing-page' className="align-middle text-center">
        <Col xs={4}>
          <Image roundedCircle src="/images/meteor-logo.png" width="150px" />
        </Col>
        <Col xs={8} className="d-flex flex-column justify-content-center">
          <h1>Hello World</h1>
          <p>Now get to work and modify this app!</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default TopCard;
