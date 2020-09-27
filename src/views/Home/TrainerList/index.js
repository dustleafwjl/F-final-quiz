/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';
import {
  createTrainerAndGet,
  getAllTrainerWithNotGrouped,
  deleteTrainerById,
} from '../../../utils/Api/trainer';
import Personnel from '../../../components/Personnel';

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
    this.refresh();
  }

  // TODO feedback：跟componentDidMount中行逻辑重复
  refresh = () => {
    getAllTrainerWithNotGrouped().then((res) => {
      this.setState({
        trainers: res.data,
      });
    });
  };

  showInput = () => {
    this.setState({ inputVisible: true });
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
          return (
            <Personnel
              key={`trainer:${tag.name}`}
              info={{ ...tag, index }}
              handleDelete={deleteTrainerById}
              refresh={this.refresh}
            />
          );
        })}
        {inputVisible ? (
          <Input
            autoFocus
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
