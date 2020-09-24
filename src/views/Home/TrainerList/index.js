import React, { Component } from 'react';
import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';
import { createTrainerAndGet, getAllTrainerWithNotGrouped } from '../../../utils/Api';
import InfoPopover from '../../../components/InfoPopover';

class TrainerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
      inputVisible: false,
      inputValue: '',
    };
  }

  componentDidMount() {
    getAllTrainerWithNotGrouped().then((res) => {
      this.setState({
        trainers: res.data,
      });
    });
  }

  saveInputRef = (input) => {
    this.input = input;
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    if (inputValue) {
      createTrainerAndGet({
        name: inputValue,
        id: '',
        group: '',
      }).then((res) => {
        this.setState((preState) => ({
          trainers: [...preState.trainers, res.data],
        }));
      });
    }
    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  render() {
    const { inputVisible, inputValue } = this.state;
    return (
      <div className="trainer_list">
        <h1>讲师列表</h1>
        {this.state.trainers.map((tag, index) => {
          return <InfoPopover key={`trainer:${tag.name}`} info={{ ...tag, index }} />;
        })}
        {inputVisible ? (
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
          <Tag className="site-tag-plus trainer_tag" onClick={this.showInput}>
            <PlusOutlined /> 添加教师
          </Tag>
        )}
      </div>
    );
  }
}

export default TrainerList;
