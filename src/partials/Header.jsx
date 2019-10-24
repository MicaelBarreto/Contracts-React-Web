import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';

import Navs from '../components/header-nav/Nav';

function Header(props) {
    const [exists, setExists] = useState(false);
    
    function mobileSidebarToggle(e) {
        if (exists === false) {
            setExists(true);
        }

        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
        var node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = function() {
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle("nav-open");
        };
        document.body.appendChild(node);
    }

    return (
        <Navbar fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">{props.brandText}</a>
                </Navbar.Brand>
                <Navbar.Toggle onClick={mobileSidebarToggle} />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navs />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;