import React, { Component } from 'react';
import './App.scss';

import StudentList from '../views/StudentList';
import GroupList from '../views/GroupList';

import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList />
      </div>
    );
  }
}

export default App;
