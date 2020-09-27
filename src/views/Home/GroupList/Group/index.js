/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Input } from 'antd';
import './index.scss';

import { deleteTraineeById } from '../../../../utils/Api/trainee';
import { deleteTrainerById } from '../../../../utils/Api/trainer';

import Personnel from '../../../../components/Personnel';

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
    const { id } = this.props.group;
    const { inputValue } = this.state;
    this.props.handleGroupReNameClick(id, inputValue);
    this.setState({
      inputVisable: false,
      inputValue: '',
    });
  };

  render() {
    const { inputVisable, inputValue } = this.state;
    const { name, trainees, trainers } = this.props.group;
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
            <div onClick={this.showInput}>
              <h3>{name}</h3>
            </div>
          )}
          <div className="trainee-wrap">
            {trainers.map((trainer, index) => (
              <Personnel
                key={`trainer:${trainer.name}`}
                info={{ ...trainer, index, team: name }}
                handleDelete={deleteTrainerById}
                refresh={this.props.refresh}
              />
            ))}
          </div>
        </header>
        <main>
          {trainees.map((trainee, index) => (
            <Personnel
              key={`trainee:${trainee.name}`}
              info={{ ...trainee, index, team: name }}
              handleDelete={deleteTraineeById}
              refresh={this.props.refresh}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default Group;
