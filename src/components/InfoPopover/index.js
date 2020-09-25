import React, { Component } from 'react';
import { Tag, Popover, Modal, message } from 'antd';

class InfoPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      confirmLoading: false,
    };
  }

  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleConfirm = () => {
    this.setState({
      confirmLoading: true,
    });
    this.props
      .handleDelete(this.props.info.id)
      .then((res) => {
        if (res.status === 204) {
          message.success('删除成功！');
          this.setState({
            confirmLoading: false,
            modalVisible: false,
          });
          this.props.reFresh();
        }
      })
      .catch((err) => {
        message.error('删除失败！', err);
        this.setState({
          confirmLoading: false,
          modalVisible: false,
        });
      });
  };

  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  infoPanel = () => {
    const { info } = this.props;
    return (
      <div>
        {Object.entries(info)
          .filter((ele) => ele[0] !== 'index')
          .map((item, index) => {
            return <Tag key={`${item[1]}${index}`}>{`${item[0]}: ${item[1]}`}</Tag>;
          })}
      </div>
    );
  };

  render() {
    const { info } = this.props;
    return (
      <>
        <Popover content={this.infoPanel()}>
          <Tag onClick={this.showModal} className="student_tag">{`${info.id} ${info.name}`}</Tag>
        </Popover>
        <Modal
          title={this.props.type || '确定删除吗？'}
          visible={this.state.modalVisible}
          onOk={this.handleConfirm}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>删除学员后不可复原</p>
        </Modal>
      </>
    );
  }
}

export default InfoPopover;
