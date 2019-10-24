import React from 'react';
import { NavItem, Nav } from "react-bootstrap";

const Nav = ({ name }) => (
    <div>
        <Nav>
            <NavItem eventKey={1} href="#">
                <i className="fa fa-dashboard" />
            </NavItem>
            <NavItem eventKey={3} href="#">
                <i className="fa fa-search" />
                <p className="hidden-lg hidden-md">Search</p>
            </NavItem>
        </Nav>
        <Nav pullRight>
            <NavItem eventKey={1} href="#">
                {name}
            </NavItem>
            <NavItem eventKey={3} href="#">
                Log out
            </NavItem>
        </Nav>
    </div>
);

export default Nav;