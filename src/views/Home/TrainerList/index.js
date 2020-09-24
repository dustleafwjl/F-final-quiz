/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Tag, Input, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';
import {
  createTrainerAndGet,
  getAllTrainerWithNotGrouped,
  deleteTrainerById,
} from '../../../utils/Api/trainer';
import InfoPopover from '../../../components/InfoPopover';

class TrainerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
      inputVisible: false,
      inputValue: '',
      modalVisible: false,
      confirmLoading: false,
      deleteTrainerId: 0,
    };
  }

  componentDidMount() {
    getAllTrainerWithNotGrouped().then((res) => {
      this.setState({
        trainers: res.data,
      });
    });
  }

  reFresh = () => {
    getAllTrainerWithNotGrouped().then((res) => {
      this.setState({
        trainers: res.data,
      });
    });
  };

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

  showModal = (id) => {
    this.setState({
      modalVisible: true,
      deleteTrainerId: id,
    });
  };

  handleConfirm = () => {
    this.setState({
      confirmLoading: true,
    });
    // send request
    deleteTrainerById(this.state.deleteTrainerId).then((res) => {
      if (res.status === 204) {
        message.success('删除成功！');
        this.setState({
          confirmLoading: false,
          modalVisible: false,
        });
        this.reFresh();
      }
    });
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    const { inputVisible, inputValue } = this.state;
    return (
      <div className="trainer_list">
        <h1>讲师列表</h1>
        {this.state.trainers.map((tag, index) => {
          return (
            <span onClick={() => this.showModal(tag.id)} key={`trainer:${tag.name}`}>
              <InfoPopover info={{ ...tag, index }} />
            </span>
          );
        })}
        <Modal
          title="删除讲师"
          visible={this.state.modalVisible}
          onOk={this.handleConfirm}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>删除讲师后不可复原</p>
        </Modal>
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
