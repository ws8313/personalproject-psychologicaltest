import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import UserStore from './components/UserStore';

import UserPage from './components/UserPage';
import TestExPage from './components/TestExPage';
import TestPage from './components/TestPage';
import ResultPage from './components/ResultPage';



function App() {
  return (
    <div className="App">
      <UserStore>
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route path="/TestExPage" component={TestExPage} />
          <Route path="/TestPage" component={TestPage} />
          <Route path="/ResultPage" component={ResultPage} />
        </Switch>
      </UserStore>
    </div>
  );
}

export default App;
