import React, { Component } from 'react';
import { Timeline, Icon} from 'antd';


class MyTimeline extends Component {
    state = {  }
    render() { 
        return ( 
        	<React.Fragment>
        			<Timeline pending="In Progress..." reverse={false}>
    					<Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
					    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
					    <Timeline.Item color="red">
					      <p>Solve initial network problems 1</p>
					      <p>Solve initial network problems 2</p>
					      <p>Solve initial network problems 3 2015-09-01</p>
					    </Timeline.Item>
					    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
					      <p>Technical testing 1</p>
					      <p>Technical testing 2</p>
					      <p>Technical testing 3 2015-09-01</p>
					    </Timeline.Item>
					</Timeline>
        	</React.Fragment>
         );
    }
}
 
export default MyTimeline;