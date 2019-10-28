import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Sidebar.scss';

const Sidebar = ({ show, handleSide }) => (
    <div class={'sidebar '+(show ? 'active' : '')}>
        <div className='brand'>
            <a className="close" onClick={handleSide}/>
            <Link to='/' className='name'>Contracts</Link>
        </div>
        <Link to='/' className='side-item'>
            <div className='side-content'>                
                <FontAwesomeIcon
                    icon="file-contract"
                    size="lg"
                    color="white"
                    className="image"
                />
                <div className='text'>
                    Contracts
                </div>
            </div>
        </Link>
        <Link to='/' className='side-item'>
            <div className='side-content'>                
                <FontAwesomeIcon
                    icon="building"
                    size="lg"
                    color="white"
                    className="image"
                />
                <div className='text'>
                    Companies
                </div>
            </div>
        </Link>
        <Link to='/' className='side-item'>
            <div className='side-content'>
                <FontAwesomeIcon
                    icon="file-invoice-dollar"
                    size="lg"
                    color="white"
                    className="image"
                />
                <div className='text'>
                    Payments
                </div>
            </div>
        </Link>
        <Link to='/' className='side-item'>
            <div className='side-content'>                
                <FontAwesomeIcon
                    icon="user"
                    size="lg"
                    color="white"
                    className="image"
                />
                <div className='text'>
                    Users
                </div>
            </div>
        </Link>
    </div>
);

export default withRouter(Sidebar);