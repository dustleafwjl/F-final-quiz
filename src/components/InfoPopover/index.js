import React, { Component } from 'react';
import { Tag, Popover, Modal, message } from 'antd';

// TODO feedback：组件命名尽量符合业务功能，可以命名为Personnel之类的，popover和modal只是附属功能
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
          // TODO feedback：refresh是一个词，F不需要大写
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
        {/* TODO feedback：使用Object.keys, info[key]实现，可读性会更高些 */}
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
