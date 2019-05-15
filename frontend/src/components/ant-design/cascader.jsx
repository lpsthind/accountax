import React from "react";
import { Cascader } from 'antd';



class Cascaders extends React.Component {
  state = {
    
  }
  onChange =(v) =>{
    console.log(v);
  }
  
  render() {
    const options = [{
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [{
            value: 'hangzhou',
            label: 'Hanzhou',
            children: [{
              value: 'xihu',
              label: 'West Lake',
            }],
          }],
        }, {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            }],
          }],
        }];

    return (
      <Cascader options={options} onChange={this.onChange} changeOnSelect />
    );
  }
}
export default Cascaders;