import React, { Component } from 'react'

import { Tag, Input, Tooltip } from 'antd';
class Group extends Component {
  state = {
    inputVisable: false,
    inputValue: '',
    input: null
  }


  saveInputRef = input => {
    this.input = input;
  };

  showInput = () => {
    this.setState({ inputVisable: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { name } = this.props.group;
    const { inputValue } = this.state;
    this.props.handleGroupReNameClick(name, inputValue);
    this.setState({
      inputVisable: false,
      inputValue: '',
    });
  };
  render() {
    console.log(this.props)
    const { inputVisable, inputValue } = this.state;
    const { name, students } = this.props.group;
    return (
      <div className='group'>
        <header>
          {
            inputVisable && <Input
              ref={this.saveInputRef}
              type="text"
              size="small"
              className="tag-input"
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          }
          {
            !inputVisable && <h3 onClick={this.showInput}>{name}</h3>
          }
        </header>
        <main>
          {
            students.map(student => <Tag
                    className='student_tag'
                    key={student.name+name}
                  >
                    {`${student.id} ${student.name}`}
                  </Tag>)
          }
        </main>
      </div>
    )
  }
}

export default Group