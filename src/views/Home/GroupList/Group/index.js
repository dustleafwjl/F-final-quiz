import React, { Component } from 'react';

import { Tag, Input } from 'antd';
import './index.scss';

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVisable: false,
      inputValue: '',
    };
  }

  saveInputRef = (input) => {
    this.input = input;
  };

  showInput = () => {
    this.setState({ inputVisable: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
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
    const { inputVisable, inputValue } = this.state;
    const { name, students } = this.props.group;
    return (
      <div className="group">
        <header className="title_wrap">
          {inputVisable ? (
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
          ) : (
            <div
              // eslint-disable-next-line jsx-a11y/aria-role
              role="input"
              onMouseDown={this.showInput}
              onKeyDown={this.showInput}
              onClick={this.showInput}
            >
              <h3>{name}</h3>
            </div>
          )}
        </header>
        <main>
          {students.map((student) => (
            <Tag className="student_tag" key={student.name + name}>
              {`${student.id} ${student.name}`}
            </Tag>
          ))}
        </main>
      </div>
    );
  }
}

export default Group;
