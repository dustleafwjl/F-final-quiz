import React, { Component } from 'react';
import './App.scss';

import StudentList from '../components/StudentList'
import GroupList from '../components/GroupList'

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList></GroupList>
        <StudentList></StudentList>
      </div>
    );
  }
}

export default App;
