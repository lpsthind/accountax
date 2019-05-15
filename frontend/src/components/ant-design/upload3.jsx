import React, { Component } from 'react';
import { Upload, Button, Icon } from 'antd';
import "./upload3.css"

class Upload3 extends Component {
    state = {  }

    render() {
    const fileList = [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }];

      const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture',
        defaultFileList: [...fileList],
      };

      const props2 = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture',
        defaultFileList: [...fileList],
        className: 'upload-list-inline',
      };
 
        return ( 
          <React.Fragment>
              <div>
                <Upload {...props}>
                    <Button>
                      <Icon type="upload" /> Upload
                    </Button>
                </Upload>
                  <br />
                  <br />
                <Upload {...props2}>
                    <Button>
                      <Icon type="upload" /> Upload
                    </Button>
                </Upload>
              </div>
          </React.Fragment>
         );
    }
}

 
export default Upload3;