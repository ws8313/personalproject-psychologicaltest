import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import UserStore from "./components/UserStore";

import UserPage from "./components/UserPage";
import TestExPage from "./components/TestExPage";
import TestPage from "./components/TestPage";
import ResultPage from "./components/ResultPage";
import TestEndPage from "./components/TestEndPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <UserStore>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={UserPage} />
            <Route path="/TestExPage" component={TestExPage} />
            <Route path="/TestPage" component={TestPage} />
            <Route path="/TestEndPage" component={TestEndPage} />
            <Route path="/ResultPage" component={ResultPage} />
          </Switch>
        </ScrollToTop>
      </UserStore>
    </div>
  );
}

export default App;
