import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/UserPage" component={ UserPage } />
    </div>
  );
}

export default App;
