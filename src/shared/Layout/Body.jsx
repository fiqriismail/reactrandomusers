import React from 'react';

import Dashboard from '../../components/Dashboard/Dashboard';
import UserList from './../../components/Users/UserList';
import UserDetails from './../../components/Users/UserDetails';
import About from './../../components/InfoPages/About';

function Body() {
  return (
    <div className="container-fluid">
      <Dashboard />
      <UserList />
      <UserDetails />
      <About />
    </div>
  );
}

export default Body;
