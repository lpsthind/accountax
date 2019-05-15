import { Popover, Button } from 'antd';
import React, { Component } from 'react';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

class MyPopover extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="demo" style={{marginTop:"100px"}}>
                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                <Popover placement="topRight" title={text} content={content} trigger="hover">
                    <Button>TR</Button>
                </Popover>
                </div>
            </div>
        );
    }
} 
export default MyPopover;

