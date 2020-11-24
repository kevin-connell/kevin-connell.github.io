import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const NavCom = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{backgroundColor: "lightblue"}} light expand="md">
                <NavbarBrand className="initials" href="/">KC</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/portfolio">PORTFOLIO</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">CONTACT</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavCom;