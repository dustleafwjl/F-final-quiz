/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';
import { Form, Input, Button, Space } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 10, span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
class AddStudent extends Component {
  onFinish = (values) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Fail:', errorInfo);
  };

  onCancelClick = () => {
    console.log('cancel');
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
          <Form.Item label="Zoom ID" name="zoom" rules={[{ required: true, message: '' }]}>
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
        ;
      </div>
    );
  }
}

export default AddStudent;
