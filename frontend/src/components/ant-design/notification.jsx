import React, { Component } from 'react';
import { Button, notification, Icon } from 'antd';

class MyNotifications extends Component {
    state = {  }

    openNotification = () => {
	  const args = {
	    message: 'Notification Title',
	    description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
	    duration: 0,
	    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
	    placement: "bottomRight"
	  };
	  notification.open(args);
	};

	openNotificationWithIcon = (type) => {
	  notification[type]({
	    message: 'Notification Title',
	    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
	  });
	}

    render() { 
        return ( 
        	<React.Fragment>
				<Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
				  <div>
    				<Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
				    <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
				    <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
				    <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
				  </div>
 		
        	</React.Fragment>
         );
    }
}
 
export default MyNotifications;