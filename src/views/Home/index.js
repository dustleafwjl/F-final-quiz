import React, { Component } from 'react';

import StudentList from './StudentList';
import TrainerList from './TrainerList';
import GroupList from './GroupList';

class Home extends Component {
  render() {
    return (
      // TODO feedback：可以使用语义化标签， 比如main，几个大的组件内可以用section
      <div className="home">
        <TrainerList />
        <StudentList />
        <GroupList />
      </div>
    );
  }
}

export default Home;
