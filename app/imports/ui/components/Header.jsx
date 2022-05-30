import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  return (
    <Navbar collapseOnSelect expand="lg" className='header' variant="dark">
      <Container>
        <img src='/images/HOCA-Logo-cropped.jpg' className='img-fluid hover-overlay' style={{ maxWidth: '6em' }} size='huge' />
        <Navbar.Brand as={NavLink} activeClassName="active" exact to="/" style={{ color: 'white' }}><h2>Hawaii Okinawa Creative Arts</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll" style={{ textAlign: 'right' }}>
          <Nav className="me-auto justify-content-start" style={{ textAlign: 'right' }}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#location">Location</Nav.Link>
            <Nav.Link href="#newsletter">Newsletter</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            {currentUser ? ([
              <Nav.Link as={NavLink} activeClassName="active" exact to="/add" key='add'>Add Stuff</Nav.Link>,
              <Nav.Link as={NavLink} activeClassName="active" exact to="/list" key='list'>List Stuff</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Nav.Link>
            ) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (<NavDropdown id="login-dropdown" title="Login" style={{ textAlign: 'right' }}>
              <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} exact to="/signin" style={{ textAlign: 'right' }}><PersonFill />Sign in</NavDropdown.Item>
              <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} exact to="/signup" style={{ textAlign: 'right' }}><PersonPlusFill />Sign up</NavDropdown.Item>
            </NavDropdown>) : (<NavDropdown id="navbar-current-user" title={currentUser} >
              <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout"><BoxArrowRight /> Sign out</NavDropdown.Item>
            </NavDropdown>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
