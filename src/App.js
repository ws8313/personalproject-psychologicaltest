import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import UserPage from './components/UserPage';
import UserStore from './components/UserStore';
import TestExPage from './components/TestExPage';
import TestPage from './components/TestPage';



function App() {
  return (
    <div className="App">
      <UserStore>
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route path="/TestExPage" component={TestExPage} />
          <Route path="/TestPage" component={TestPage} />
        </Switch>
      </UserStore>
    </div>
  );
}

export default App;
