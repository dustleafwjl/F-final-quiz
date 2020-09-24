import React, { Component } from 'react';

import StudentList from './StudentList';
import GroupList from './GroupList';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <StudentList />
        <GroupList />
      </div>
    );
  }
}

export default Home;
