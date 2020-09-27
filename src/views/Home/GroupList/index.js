import React, { Component } from 'react';
import { Button, message } from 'antd';
import Group from './Group';
import { createdGroups, getAllGroups, changeNameGroup } from '../../../utils/Api/group';
import './index.module.scss';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: [],
    };
  }

  componentDidMount() {
    getAllGroups().then((res) => {
      this.setState({
        groupList: res.data,
      });
    });
  }

  refresh = () => {
    getAllGroups().then((res) => {
      this.setState({
        groupList: res.data,
      });
    });
  };

  handledividedClick = () => {
    createdGroups()
      .then((res) => {
        this.setState({
          groupList: res.data,
        });
        message.success('分组学员成功！');
        // eslint-disable-next-line no-restricted-globals
        history.go(0);
      })
      .catch((error) => {
        message.error('分组学员失败！', error);
      });
  };

  handleGroupReNameClick = (id, rename) => {
    changeNameGroup(id, rename)
      .then(() => {
        // eslint-disable-next-line no-restricted-globals
        // history.go(0);
      })
      .catch(() => {
        message.error('更改名称失败！');
      });
  };

  render() {
    return (
      <div className="group_list">
        <header>
          <h1>分组列表</h1>
          <Button type="primary" danger onClick={this.handledividedClick}>
            分组学员
          </Button>
        </header>
        <main>
          {this.state.groupList &&
            this.state.groupList.map((group) => (
              <Group
                key={group.name}
                group={group}
                refresh={this.refresh}
                handleGroupReNameClick={this.handleGroupReNameClick}
              />
            ))}
        </main>
      </div>
    );
  }
}

export default GroupList;
