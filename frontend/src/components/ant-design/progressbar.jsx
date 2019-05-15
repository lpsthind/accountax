import React, { Component } from 'react';
import { Progress } from 'antd';

class MyProgressBar extends Component {
    state = {  }
    render() { 
        return ( 
          <React.Fragment>
                <div>
                    <Progress
                      strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                      }}
                      percent={99.9}
                    />
                    <Progress
                      strokeColor={{
                        from: '#108ee9',
                        to: '#87d068',
                      }}
                      percent={99.9}
                      status="active"
                    />
                </div>
          </React.Fragment>
         );
    }
}export default MyProgressBar;
