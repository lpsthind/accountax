import React, { Component } from 'react';
import { Spin, Icon } from 'antd';


class MySpinner extends Component {
    state = {  }


    render() { 
        return ( 
        	<React.Fragment>
        			<Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
        			<br/>
        			<div>
					    <Spin size="small" />
					    <br/>
					    <Spin />
					    <br/>
					    <Spin size="large" />
					</div>
					<br/>
					<br/>
					<div 
					  style={{
					 	 textAlign:"center",
						 backgoundColor:"rgba(0,0,0,0.5)",
						 borderRadius:"4px",
						 marginBottom:"20px",
						 padding:"30px 50px",
						 margin:"20px 0px"
					  }}
					>
					    <Spin />
					</div>
			</React.Fragment>
         );
    }
}
 
export default MySpinner;