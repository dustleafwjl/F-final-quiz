import React, { Component } from 'react'
import { Button } from 'antd'


import Group from './Group'
import { divideStudent } from '../../utils/Api.js'
import './index.module.scss'

class GroupList extends Component {

  state = {
    groupList: []
  }

  handledividedClick = () => {
    divideStudent().then(res => {
      this.setState({
        groupList: res.data
      })
    })
  }

  formatGroupDate = (students) => {
    const groupTemp = []
    const groupMapper = {}
    let groupIndex = 0;
    students.forEach(student => {
      if(!groupMapper[student.group]) {
        groupMapper[student.group] = ++ groupIndex;
      }
        groupTemp[groupMapper - 1].push(student);
    });
    this.setState({
      groupList: groupTemp
    })
  }
  render() {
    return (
      <div className='group_list'>
        <header>
          <h1>分组列表</h1>
          <Button type="primary" danger onClick={this.handledividedClick}>
            分组学员
          </Button>
        </header>
        <main>
          {
            this.state.groupList.map(group => <Group group={group}></Group>)
          }
        </main>
      </div>
    )
  }
}

export default GroupList;
