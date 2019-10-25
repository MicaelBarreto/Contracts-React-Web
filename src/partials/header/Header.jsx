import React from 'react';

import './Header.scss';

function Header(props) {

    return (
        <nav class="header">
            <div class="page-name">Company</div>
            <div class="header-right">
                {/* <div id="myDropdown" class="dropdown-content">
                    <a>About</a>
                </div> */}
            </div>
        </nav>
    );
}

export default Header;