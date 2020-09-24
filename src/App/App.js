import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from '../views/Home';
import AddStudent from '../views/AddStudent';

import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/addstudent">
              <AddStudent />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
