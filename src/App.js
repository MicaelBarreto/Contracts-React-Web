import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSignOutAlt, faBars, faFileInvoiceDollar, faFileContract, faBuilding } from '@fortawesome/free-solid-svg-icons';

import './App.scss';
import './styles/page-standards.scss';

import Header from './partials/header/Header';
import Sidebar from './partials/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Contracts from './pages/contract/Contracts';

function App(){
  const [sideShow, setSideShow] = useState(false);

  return (
    <Router>
      <div className="App">
        <Sidebar show={sideShow} handleSide={() => sideShow ? setSideShow(false) : setSideShow(true)} />
        <div className='content'>
          <Header handleSide={() => sideShow ? setSideShow(false) : setSideShow(true)} />
          <div className='inner'>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/companies' component={Contracts} />
            <Route exact path='/contracts' component={Contracts} />
            <Route exact path='/users' />
            <Route exact path='/payments' />      
          </div>
        </div>    
      </div>
    </Router>
  );
};

library.add(faUser, faSignOutAlt, faBars, faFileInvoiceDollar, faFileContract, faBuilding);
export default App;
