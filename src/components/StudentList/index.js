import React, { Component } from 'react'
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './index.module.scss'
import { getAllStudent, createStudentAndGet } from "../../utils/Api.js"

class StudentList extends Component {
  state = {
    students: [],
    inputVisible: false,
    inputValue: ''
  }

  componentDidMount() {
    getAllStudent().then(res => {
      this.setState({
        students: res.data
      })
    })
  }

  saveInputRef = input => {
    this.input = input;
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    if(inputValue) {
      createStudentAndGet({
        name: inputValue,
        id: "",
        group: ""
      }).then(res => {
        this.setState({
          students: res.data
        })
      })
    }
    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  

  render() {
    const { inputVisible, editInputValue, inputValue } = this.state;
    return (
      <div className='student_list'>
        <h1>学生列表</h1>
        {
          this.state.students.map((tag, index) => {
            return (
              <Tag
                className='student_tag'
                key={tag.name}
              >
                {`${tag.id} ${tag.name}`}
              </Tag>
            )
          })
        }
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            className="tag-input"
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag className="site-tag-plus student_tag" onClick={this.showInput}>
            <PlusOutlined /> 添加学员
          </Tag>
        )}
      </div>
    )
  }
}

export default StudentList;
