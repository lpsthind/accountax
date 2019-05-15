import React, { Component } from 'react';
import { Divider } from 'antd';


class MyDivider extends Component {
    state = {  }
    render() { 
        return ( 
        	<React.Fragment>
        			<div>
					    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
					    <Divider />
					    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
					    <Divider>With Text</Divider>
					    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
					    <Divider dashed />
					    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
					</div>
        	</React.Fragment>
         );
    }
}
 
export default MyDivider;