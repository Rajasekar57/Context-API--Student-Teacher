import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to ="/home">Student & Teacher Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/home">Home</Nav.Link>
            <Nav.Link as={Link} to ="/teacherslist">TeacherList</Nav.Link>
            <Nav.Link as={Link} to ="/studentslist">StudentList</Nav.Link>
            <Nav.Link as={Link} to ="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar