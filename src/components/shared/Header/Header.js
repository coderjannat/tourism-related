import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Nav, Button } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { GiTreeGrowth} from 'react-icons/gi';

import {MdOutlinePermContactCalendar} from 'react-icons/md';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><span className="text-warning fw-bolder fs-3">T</span>rAvilla</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto ms-5 ps-3">
                <Nav.Link  as={HashLink} to="/home#home">
                <AiOutlineHome size={25} className="ms-2"/>
                <div>Home</div></Nav.Link>
                <Nav.Link className="ps-5" as={HashLink} to="/success#Success">
                <GiTreeGrowth size={25} className="ms-3"/>
                  <div>Success</div></Nav.Link>
                
                <Nav.Link className="ps-5" as={HashLink} to="/adddestinations">
                <MdOutlinePermContactCalendar size={25} className="ms-5"/>
                  <div>Add Destination</div></Nav.Link>
                <Nav.Link className="ps-5" as={HashLink} to="/adminDashboard">
                <MdOutlinePermContactCalendar size={25} className="ms-5"/>
                  <div>Admin Dashboard</div></Nav.Link>
  
              </Nav> 
              <Nav>
                <Navbar.Text>
                  Signed in as: <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
                {user?.displayName && <Button onClick={logOut} className="ms-2 mt-1 mb-4" size="sm" variant="outline-light">Sign Out</Button>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;