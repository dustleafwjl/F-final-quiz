import React, { Component } from 'react';
import { Tag } from 'antd';
import { withRouter } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';
import { getAllStudentWithNotGrouped } from '../../../utils/Api';
import InfoPopover from '../../../components/InfoPopover';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    getAllStudentWithNotGrouped().then((res) => {
      this.setState({
        students: res.data,
      });
    });
  }

  goToAddTrainee = () => {
    this.props.history.push('/addstudent');
  };

  render() {
    return (
      <div className="student_list">
        <h1>学生列表</h1>
        {this.state.students.map((tag, index) => {
          return <InfoPopover key={tag.name} info={{ ...tag, index }} />;
        })}
        <Tag className="site-tag-plus student_tag" onClick={this.goToAddTrainee}>
          <PlusOutlined /> 添加学员
        </Tag>
      </div>
    );
  }
}

export default withRouter(StudentList);
