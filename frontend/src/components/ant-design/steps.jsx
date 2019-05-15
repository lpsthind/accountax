import React from "react";
import { Steps, Button, message, Icon } from 'antd';
const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

class StepsforMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current} status="error">
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          }
        </div>

        <div style={{matginTop:"50px"}}>
          <Steps direction="vertical" size="small" current={1}>
            <Step title="Finished" description="This is a description." icon={<Icon type="user" />}/>
            <Step title="In Progress" description="This is a description." icon={<Icon type="solution" />}/>
            <Step title="Waiting" description="This is a description." icon={<Icon type="credit-card" />}/>
            <Step title="Waiting" description="This is a description." icon={<Icon type="smile-o" />}/>
          </Steps>
        </div>


      </div>
    );
  }
}
export default StepsforMe;