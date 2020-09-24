/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Tag, Modal, message } from 'antd';
import { withRouter } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';
import { getAllStudentWithNotGrouped, deleteTraineeById } from '../../../utils/Api/trainee';
import InfoPopover from '../../../components/InfoPopover';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      modalVisible: false,
      confirmLoading: false,
      deleteTraineeId: 0,
    };
  }

  componentDidMount() {
    getAllStudentWithNotGrouped().then((res) => {
      this.setState({
        students: res.data,
      });
    });
  }

  reFresh = () => {
    getAllStudentWithNotGrouped().then((res) => {
      this.setState({
        students: res.data,
      });
    });
  };

  goToAddTrainee = () => {
    this.props.history.push('/addstudent');
  };

  showModal = (id) => {
    this.setState({
      modalVisible: true,
      deleteTraineeId: id,
    });
  };

  handleConfirm = () => {
    this.setState({
      confirmLoading: true,
    });
    // send request
    deleteTraineeById(this.state.deleteTraineeId).then((res) => {
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
    return (
      <div className="student_list">
        <h1>学生列表</h1>
        {this.state.students.map((tag, index) => {
          return (
            <span onClick={() => this.showModal(tag.id)} key={`trainee:${tag.name}`}>
              <InfoPopover info={{ ...tag, index }} />
            </span>
          );
        })}
        <Tag className="site-tag-plus student_tag" onClick={this.goToAddTrainee}>
          <PlusOutlined /> 添加学员
        </Tag>
        <Modal
          title="删除学员"
          visible={this.state.modalVisible}
          onOk={this.handleConfirm}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>删除学员后不可复原</p>
        </Modal>
      </div>
    );
  }
}

export default withRouter(StudentList);
