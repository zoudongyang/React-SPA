/**
 * Created by JESSICA on 2017/6/21.
 */
import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "antd";
import "./index.less";

export class SubPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      img:
        "https://orig00.deviantart.net/95a9/f/2012/363/6/4/pixel_duck_by_pixeldinosaur-d5pkk28.png"
    };
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
    const { img, visible } = this.state;
    if (!this.props.someMessage.result) {
      return null;
    }
    return (
      <div className="sub-page">
        <img src={img} alt="" />
        <Button onClick={this.showModal}>Click to open a modal</Button>

        <p className="mp3-title">
          {this.props.someMessage.result.name} is from store /
          来自sotre可以全局共享的状态:
        </p>
        <audio controls="controls" src={this.props.someMessage.result.url}>
          Your browser does not support the audio tag.
        </audio>

        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>In this project, you can use ant design directly</p>
          <p>
            <a
              href="https://ant.design/components/modal-cn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              这个项目中你可以直接使用antDesign
            </a>
          </p>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  someMessage: state.entry
});

export default connect(mapStateToProps)(SubPage);
