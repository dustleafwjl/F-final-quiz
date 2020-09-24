/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, Space, message } from 'antd';

import { createStudentAndGet } from '../../utils/Api';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 16 },
};

const validateMessages = {
  required: '${label} 为必填项!',
  types: {
    email: '${label} 格式不符合',
    number: '${label} 格式不符合',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
class AddStudent extends Component {
  onFinish = (values) => {
    // eslint-disable-next-line no-console
    createStudentAndGet(values).then(() => {
      message.success('添加学员成功！');
      this.props.history.push('/');
    });
  };

  onFinishFailed = (errorInfo) => {
    message.success('添加学员成功！', errorInfo.message);
  };

  onCancelClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>添加学员</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          validateMessages={validateMessages}
        >
          <Form.Item label="姓名" name="name" rules={[{ required: true, message: '' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="邮箱" name="eamiil" rules={[{ type: 'email' }, { required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="办公室" name="office" rules={[{ required: true, message: '' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Zoom ID" name="zoomId" rules={[{ required: true, message: '' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Github账号"
            name="github"
            rules={[{ type: 'email' }, { required: true, message: '不能为空' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={this.onCancelClick}>
                取消
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(AddStudent);
