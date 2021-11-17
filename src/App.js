import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import UserPage from './components/UserPage';
import TestExPage from './components/TestExPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserPage} />
        <Route path="/TestExPage" component={TestExPage} />
      </Switch>
    </div>
  );
}

export default App;
