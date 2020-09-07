import React, { Component } from 'react'
import { Button } from 'antd'


import Group from './Group'
import { divideStudent, getAllGroups, reNameGroup } from '../../utils/Api.js'
import './index.module.scss'

class GroupList extends Component {

  state = {
    groupList: []
  }


  componentDidMount() {
    getAllGroups().then(res => {
      console.log(res)
      this.setState({
        groupList: res.data
      })
    })
  }
  handledividedClick = () => {
    divideStudent().then(res => {
      this.setState({
        groupList: res.data
      })
    })
  }

  handleGroupReNameClick = (name, rename) => {
    reNameGroup(name, rename).then(res => {
      console.log(res);
      this.setState({
        groupList: res.data
      })
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
            this.state.groupList.map(group => <Group group={group} handleGroupReNameClick={this.handleGroupReNameClick}></Group>)
          }
        </main>
      </div>
    )
  }
}

export default GroupList;
