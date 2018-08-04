import React, { Component } from "react";
import "./App.css";
import Modal from "antd/lib/modal";
import Radio from "antd/lib/radio";
import RadioGroup from "antd/lib/radio/group";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelete: true,
      preview: "preview",
      dialogShow: false,
      selectRadio: 0,
      list: [],
      delete: "delete"
    };
  }

  showDialog = () => {
    this.setState({ dialogShow: true });
  };

  handleCancelDialog = () => {
    this.setState({ dialogShow: false });
  };

  onChange = e => {
    this.setState({ selectRadio: e.target.value });
  };

  onPush = () => {
    let list = this.state.list;
    list.push({ type: this.state.selectRadio });
    this.setState({ list: list });
    this.setState({ dialogShow: false });
  };

  delete = index => {
    let list = this.state.list.filter((item, i) => i !== index);
    this.setState({ list: list });
  };

  remove = index => {
    let list = this.state.list;
    this.state.list.splice(index, 1);
    this.setState({ list: list });
  };

  render() {
    return (
      <div className="App">
        <button type="primary">
          {this.state.preview}
        </button>
        <button type="primary" onClick={this.showDialog}>
          add
        </button>
        <div>
          {this.state.list.map((item, index) => {
            if (item.type === 1) {
              if (this.state.showDelete) {
                return (
                  <div key={index}>
                    <input type="text" placeholder="text" />
                    <button
                      type="primary"
                      onClick={() => {
                        this.remove(index);
                      }}
                    >
                      {this.state.delete}
                    </button>
                  </div>
                );
              } else {
                return (
                  <div>
                    <input type="text" placeholder="text" />
                  </div>
                );
              }
            } else {
              if (this.state.showDelete) {
                return (
                  <div>
                    <input type="date" />
                    <button
                      type="primary"
                      onClick={() => {
                        this.remove(index);
                      }}
                    >
                      {this.state.delete}
                    </button>
                  </div>
                );
              } else {
                return (
                  <div>
                    <input type="date" />
                  </div>
                );
              }
            }
          })}
        </div>
        <Modal
          title="Select input type"
          visible={this.state.dialogShow}
          onOk={this.onPush}
          onCancel={this.handleCancelDialog}
        >
          <RadioGroup onChange={this.onChange} value={this.state.selectRadio}>
            <Radio value={1}>Text Input</Radio>
            <Radio value={2}>Date Picker</Radio>
          </RadioGroup>
        </Modal>
      </div>
    );
  }
}

export default App;
