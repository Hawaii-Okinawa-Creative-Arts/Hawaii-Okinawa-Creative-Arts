import React from 'react';
import { Col, Row, Container, Stack } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => {
  const divStyle = { paddingTop: '15px' };
  return (
    <footer className='footer'>
      <Container style={divStyle}>
        <Row>
          <Col>
            <Stack>
              <h3>Links</h3>
              <a href="">Home</a>
              <a href="">About Us</a>
              <a href="">Location</a>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <h3>Contact</h3>
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              Phone number<br/>
              Email address
            </Stack>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
