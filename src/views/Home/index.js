import React, { Component } from 'react';

import TraineeList from './TraineeList';
import TrainerList from './TrainerList';
import GroupList from './GroupList';

class Home extends Component {
  render() {
    return (
      // TODO feedback：可以使用语义化标签， 比如main，几个大的组件内可以用section
      <div className="home">
        <GroupList />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default Home;
