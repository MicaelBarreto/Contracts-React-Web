import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSignOutAlt, faBars, faFileInvoiceDollar, faFileContract, faBuilding } from '@fortawesome/free-solid-svg-icons';

import './App.scss';

import Header from './partials/header/Header';
import Sidebar from './partials/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';

function App(){
  const [sideShow, setSideShow] = useState(false);

  return (
    <Router>
      <div className="App">
        <Sidebar show={sideShow} handleSide={() => sideShow ? setSideShow(false) : setSideShow(true)} />
        <div className='content'>
          <Header handleSide={() => sideShow ? setSideShow(false) : setSideShow(true)} />
          <div className='inner'>
            <h1>Teste</h1>      
            {/* <Route exact path='/' component={Dashboard} />
            <Route path='/companies' component={} />
            <Route path='/contracts' component={} />
            <Route path='/users' component={} />
            <Route path='/payments' component={} />       */}
          </div>
        </div>    
      </div>
    </Router>
  );
};

library.add(faUser, faSignOutAlt, faBars, faFileInvoiceDollar, faFileContract, faBuilding);
export default App;
