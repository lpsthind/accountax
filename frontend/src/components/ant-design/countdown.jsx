import React, { Component } from 'react';
import { Statistic, Row, Col } from 'antd';

const Countdownn = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

class Countdown extends Component {
    state = {  }

    onFinish = () => {
        console.log('finished!');
    }

    render() { 
        return ( 
          <React.Fragment>
               <Row gutter={16}>
                  <Col span={12}>
                    <Countdownn title="Countdown" value={deadline} onFinish={this.onFinish} />
                  </Col>
                  <Col span={12}>
                    <Countdownn title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                  </Col>
                  <Col span={24} style={{ marginTop: 32 }}>
                    <Countdownn title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
                  </Col>
                </Row>
          </React.Fragment>
         );
    }
}
export default Countdown;