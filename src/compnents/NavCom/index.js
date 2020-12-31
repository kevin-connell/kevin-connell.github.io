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
            <Navbar style={{backgroundColor: "black"}} dark expand="md">
                <NavbarBrand style={{position: "relative", bottom: "3px"}} className="initials" href="/">KC</NavbarBrand>
                <NavbarToggler style={{border: "none"}} onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#aboutMeContainer">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#projectContainer">PORTFOLIO</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#aboutMeContainer">CONTACT</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavCom;