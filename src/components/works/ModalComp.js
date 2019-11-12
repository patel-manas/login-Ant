import React from "react";
import { Modal, Button } from "antd";

class ModalComp extends React.Component {
  constructor() {
    super();
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          visible={this.state.visible}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export default ModalComp;
