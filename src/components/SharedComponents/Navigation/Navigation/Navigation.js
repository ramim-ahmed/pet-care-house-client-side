import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Brand from '../../../../assets/logo-header.png';
const Navigation = () => {
    return (
        <>
             <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand>
               <Link to = '/'>
                   <Image style={{width: '150px'}}  src={Brand} alt="" fluid />
               </Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
            <Nav.Link>
                <Link to = '/home'>Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to = '/'>Who We Are</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to = '/'>Services</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to = '/'>Get In Touch</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to = '/admin'>Admin</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to = '/login'>login</Link>
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    );
};

export default Navigation;