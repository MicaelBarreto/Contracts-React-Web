import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';

import Header from './partials/header/Header';
import Sidebar from './partials/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => (
  <Router>
    <div className="App">
      <Sidebar />
      <div className='content'>
        <Header />
        <h1>Teste</h1>      
        {/* <Route exact path='/' component={Dashboard} />
        <Route path='/companies' component={} />
        <Route path='/contracts' component={} />
        <Route path='/users' component={} />
        <Route path='/payments' component={} />       */}
      </div>    
    </div>
  </Router>
);

export default App;
