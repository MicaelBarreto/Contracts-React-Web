import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "assets/sass/paper-dashboard.scss?v=1.1.0";
// import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import Header from './partials/Header';
import Sidebar from './partials/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => (
  <div className="App">
    <Header />
    <Sidebar />
    <Switch>
      <Route exact path='/' component={Dashboard} />
      {/* <Route path='/shop' component={ShopPage} />
      <Route path='/sign' component={Sign} /> */}
    </Switch>
  </div>
);

export default App;
