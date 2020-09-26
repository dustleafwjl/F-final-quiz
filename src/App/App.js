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
            {/* TODO feedback: React Route 使用准确，Route内包裹的一般是子路径，有个component props来传对应的component */}
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
