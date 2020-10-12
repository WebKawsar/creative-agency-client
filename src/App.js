import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">

        </Route>
        <Route exact path="/">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
