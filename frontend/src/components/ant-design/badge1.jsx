import React, { Component } from 'react';
import { Badge } from 'antd';


class Badge1 extends Component {
    state = {  }
    render() { 
        const colors = ['pink', 'red', 'yellow', 'orange',    'cyan',    'green',    'blue',    'purple',    'geekblue',    'magenta', 'volcano', 'gold', 'lime']
        return ( 
            <React.Fragment>
                <div>
                    <Badge status="success" />
                    <Badge status="error" />
                    <Badge status="default" />
                    <Badge status="processing" />
                    <Badge status="warning" />
                    <br />
                    <Badge status="success" text="Success" />
                    <br />
                    <Badge status="error" text="Error" />
                    <br />
                    <Badge status="default" text="Default" />
                    <br />
                    <Badge status="processing" text="Processing" />
                    <br />
                    <Badge status="warning" text="Warning" />

                    <Badge status="success" />
                    <Badge status="error" />
                    <Badge status="default" />
                    <Badge status="processing" />
                    <Badge status="warning" />
                    <br />
                    <Badge status="success" text="Success" />
                    <br />
                    <Badge status="error" text="Error" />
                    <br />
                    <Badge status="default" text="Default" />
                    <br />
                    <Badge status="processing" text="Processing" />
                    <br />
                    <Badge status="warning" text="Warning" />
                <div>
                    <br />
                    <br />                
                    <h4 style={{ marginBottom: 16 }}>Presets:</h4>
                    <div>
                      {colors.map((color) => (
                        <div key={color}>
                          <Badge color={color} text={color} />
                        </div>
                      ))}
                    </div>

                    <br />

                    <h4 style={{ margin: '16px 0' }}>Custom:</h4>
                    <div>
                        <Badge color="#f50" text="#f50" />
                        <br />
                        <Badge color="#2db7f5" text="#2db7f5" />
                        <br />
                        <Badge color="#87d068" text="#87d068" />
                        <br />
                        <Badge color="#108ee9" text="#108ee9" />
                    </div>                    
                </div>
                <br/>
                <br/>
                <div>
                    <Badge count={5}>
                        <span className="head-example" />
                    </Badge>
                </div>
            </div>
        </React.Fragment>
         );
    }
}
 
export default Badge1;
