import React from 'react';
import SearchBar from './SearchBar.jsx';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBarSearch({onSearch}) {
 
  return (
    <Navbar className='mb-3 justify-content-center shadow-sm p-3  bg-body rounded ' bg="light" variant="primary" expand="lg">
    <Container fluid>
      <Navbar.Brand className='text-primary' href="#">WeatherApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
   
        </Nav>
        <SearchBar onSearch={onSearch}/>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
};


export default NavBarSearch;