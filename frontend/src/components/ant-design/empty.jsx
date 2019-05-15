import React, { Component } from 'react';
import { Empty, Button } from 'antd';


class Emptybox extends Component {
    state = {  }
    render() { 
        return ( 
        	<React.Fragment>
    			<Empty
				    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
				    imageStyle={{
				      height: 60,
				    }}
				    description={
				      <span>
				        Customize <a href="#API">Description</a>
				      </span>
				    }
				  >
				    <Button type="primary">Create Now</Button>
				</Empty>
        	</React.Fragment>
         );
    }
}
 
export default Emptybox;