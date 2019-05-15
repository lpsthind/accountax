import React from "react";
import { Input,Tooltip,Icon } from 'antd';

class InputFields extends React.Component {
  state = {
    visible: false,
  };
  onChange =(e)=>{
  	console.log(e)
  }
  render() {
    return (
      <div>
     	<Input 
		  	placeholder="input with clear icon" 
		  	allowClear 
		  	onChange={this.onChange} 
		  	prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
		    suffix={
		      <Tooltip title="Extra information">
		        <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
		      </Tooltip>
		    }
		/>
  		<Input.Password placeholder="input password" />
      </div>
    );
  }
}
export default InputFields;