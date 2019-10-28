import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.scss';

const Header = ({ handleSide }) => (
    <nav class="header">
        <div className='header-left'>
            <a className='menu' onClick={handleSide}>
                <FontAwesomeIcon
                    icon="bars"
                    size="md"
                />
            </a>
            <div class="page-name">Company</div>
        </div>
        <div class="header-right">
            <input id="check01" type="checkbox" name="menu" />
            <label for="check01">
                <FontAwesomeIcon
                    icon="user"
                />
            </label>
            <ul class="submenu">
                <li><a href="">My account</a></li>
                <li><a href="">Accounts</a></li>
                <li><a href="">Log out</a></li>
            </ul>
        </div>
    </nav>
);

export default Header;