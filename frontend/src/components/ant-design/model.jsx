import React, { Component } from 'react';
import { Modal, Button } from 'antd';


class MyModel extends Component {
    state = {  }
    info = () => {
      Modal.info({
        title: 'This is a notification message',
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
        onOk() {},
      });
    }

    success =() => {
      Modal.success({
        title: 'This is a success message',
        content: 'some messages...some messages...',
      });
    }

    error = () => {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    }

    warning = () => {
      Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    }

    render() { 
        return ( 
          <React.Fragment>
              <div>
                <Button onClick={this.info}>Info</Button>
                <Button onClick={this.success}>Success</Button>
                <Button onClick={this.error}>Error</Button>
                <Button onClick={this.warning}>Warning</Button>
              </div>
          </React.Fragment>
         );
    }
}
 
export default MyModel;