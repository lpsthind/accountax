import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Modal, Spin, Alert } from "antd";
import { Link, withRouter } from "react-router-dom";
import "./login.css"
const { remote } = window.require('electron')
const currentWindow = remote.getCurrentWindow()
const confirm = Modal.confirm;

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // this.props.onAuth(values.username, values.password);
        console.log("Login Success")
        this.props.history.push("/auth/")
      }
    });
  };

  handleClose=()=>{
    confirm({
      title: 'Do you Want to exit?',
      content: 'AccounTrust',
      onOk() {
        console.log('OK');
        currentWindow.close()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  handleMax=()=>{
    if (currentWindow.isMaximized()) {
      currentWindow.unmaximize();
    } else {
      currentWindow.maximize();
    }   
  }

  handleMin=()=>{
    currentWindow.minimize() 
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <div id="title-bar" style={{float:"right"}}>
          <div id="title-bar-btns" style={{position:"fixed",top:"1%",right:"0.50%"}}>
              <button className="win-head" id="min-btn" onClick={this.handleMin}></button>
              <button className="win-head" id="max-btn" onClick={this.handleMax}></button>
              <button className="win-head" id="close-btn" onClick={this.handleClose}></button>
          </div>
        </div>
        <div className="login_form">
            <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator("username", {
                rules: [
                    { required: true, message: "Please input your username!" }
                ]
                })(
                <Input
                    prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                />
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator("password", {
                rules: [
                    { required: true, message: "Please input your Password!" }
                ]
                })(
                <Input
                    prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                />
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
                })(<Checkbox style={{ display: "block" }}>Remember me</Checkbox>)}
                <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                    marginRight: "10px",
                    display: "inline-block"
                }}
                >
                Log in
                </Button>
                Or
                <Link
                to="/signup"
                style={{ marginLeft: "10px", display: "inline-block" }}
                >
                Register
                </Link>
            </Form.Item>
            </Form>
        </div>
        </React.Fragment>
    );
  }
}
const Login = Form.create({ name: "normal_login" })(LoginForm);
export default withRouter(Login);
