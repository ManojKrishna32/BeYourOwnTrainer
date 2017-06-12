import React from 'react';

import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = (props) => (
 <div>
    <Navbar inverse collapseOnSelect fixedTop style={{boxShadow: '0px 10px 50px 5px rgba(0,0,0,0.35)'}}>
    <Navbar.Header>
      <Navbar.Brand>
        <span><Link to='/'> Be Your Own Trainer </Link></span>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} >
          <Link to='diet'>  Diet </Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
 </div>
)

export default Navigation;