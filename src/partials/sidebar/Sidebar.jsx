import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = () => (
    <div class="sidebar">
        <div className='brand'>
            <Link to='/' className='name'>Contracts</Link>
        </div>
        <Link to='/' className='side-item'>Contracts</Link>
        <Link to='/' className='side-item'>Companies</Link>
        <Link to='/' className='side-item'>Payments</Link>
        <Link to='/' className='side-item'>Users</Link>
    </div>
);


export default withRouter(Sidebar);