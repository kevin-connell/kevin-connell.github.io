import { useState } from 'react';
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';

const NavCom = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" style={{ backgroundColor: 'black' }}>
        <NavbarBrand
          className="initials"
          href="/"
          style={{ bottom: '3px', position: 'relative' }}
        >
          KC
        </NavbarBrand>
        <NavbarToggler onClick={toggle} style={{ border: 'none' }} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#projectContainer">PORTFOLIO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skillContainer">SKILLS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#aboutMeContainer">CONTACT</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavCom;
