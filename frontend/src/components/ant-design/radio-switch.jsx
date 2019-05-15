import React, { Component } from 'react';
import { Radio, Switch } from "antd";
class RadioBtn extends Component {
    state = {  }

    switchOnChange = (checked)  =>{
  		console.log(`switch to ${checked}`);
	}
    render() { 
        return ( 
        	<React.Fragment>
        		<div>
			      <Radio.Group defaultValue="a" buttonStyle="solid">
			        <Radio.Button value="a">Hangzhou</Radio.Button>
			        <Radio.Button value="b">Shanghai</Radio.Button>
			        <Radio.Button value="c">Beijing</Radio.Button>
			        <Radio.Button value="d">Chengdu</Radio.Button>
			      </Radio.Group>
			    </div>
			    <div style={{ marginTop: 16 }}>
			      <Radio.Group defaultValue="c" buttonStyle="solid">
			        <Radio.Button value="a">Hangzhou</Radio.Button>
			        <Radio.Button value="b" disabled>Shanghai</Radio.Button>
			        <Radio.Button value="c">Beijing</Radio.Button>
			        <Radio.Button value="d">Chengdu</Radio.Button>
			      </Radio.Group>
			    </div>

			    <Switch style={{marginTop:"20px"}} defaultChecked onChange={this.switchOnChange} />

        	</React.Fragment>
         );
    }
}
 
export default RadioBtn;