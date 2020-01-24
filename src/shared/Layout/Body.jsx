import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../../components/Dashboard/Dashboard';
import UserList from './../../components/Users/UserList';
import UserDetails from './../../components/Users/UserDetails';
import About from './../../components/InfoPages/About';

function Body() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/users/:id" exact component={UserDetails} />
        <Route path="/users" component={UserList} />

        <Route path="/about" component={About} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default Body;
