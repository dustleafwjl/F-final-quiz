import React, { Component } from 'react';

import StudentList from './StudentList';
import TrainerList from './TrainerList';
import GroupList from './GroupList';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <TrainerList />
        <StudentList />
        <GroupList />
      </div>
    );
  }
}

export default Home;
