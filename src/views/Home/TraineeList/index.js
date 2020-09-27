/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Tag } from 'antd';
import { withRouter } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';
import { getAllStudentWithNotGrouped, deleteTraineeById } from '../../../utils/Api/trainee';
import Personnel from '../../../components/Personnel';

class TraineeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    this.refresh();
  }

  // TODO feedback：跟componentDidMount中行逻辑重复
  refresh = () => {
    getAllStudentWithNotGrouped().then((res) => {
      this.setState({
        students: res.data,
      });
    });
  };

  goToAddTrainee = () => {
    this.props.history.push('/createTrainee');
  };

  render() {
    return (
      <div className="student_list">
        <h1>学生列表</h1>
        {this.state.students.map((tag, index) => {
          return (
            <Personnel
              key={`trainee:${tag.name}`}
              info={{ ...tag, index }}
              handleDelete={deleteTraineeById}
              refresh={this.refresh}
            />
          );
        })}
        <Tag className="site-tag-plus student_tag" onClick={this.goToAddTrainee}>
          <PlusOutlined /> 添加学员
        </Tag>
      </div>
    );
  }
}

export default withRouter(TraineeList);
