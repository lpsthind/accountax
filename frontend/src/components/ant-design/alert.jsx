import React, { Component } from 'react';
import { Alert } from 'antd';

class MyAlert extends Component {
    state = {  }
    render() { 
        return ( 
          <React.Fragment>
                  <div>
                      <Alert message="Success Tips" type="success" showIcon />
                      <Alert message="Informational Notes" type="info" showIcon />
                      <Alert message="Warning" type="warning" showIcon />
                      <Alert message="Error" type="error" showIcon />
                      <Alert
                        message="Success Tips"
                        description="Detailed description and advice about successful copywriting."
                        type="success"
                        showIcon
                      />
                      <Alert
                        message="Informational Notes"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                      />
                      <Alert
                        message="Warning"
                        description="This is a warning notice about copywriting."
                        type="warning"
                        showIcon
                      />
                      <Alert
                        message="Error"
                        description="This is an error message about copywriting."
                        type="error"
                        showIcon
                      />
                    </div>
          </React.Fragment>
         );
    }
}
 
export default MyAlert;