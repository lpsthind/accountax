import React, { Component } from 'react';
import { Row, Col } from 'antd';
import "./grid.css"

class MyGrid extends Component {
    state = {  }
    render() { 
    	const style1 = {backgroundColor:"lightblue",border:"0.3px solid rgba(0,0,0,.3)"}
  		const style2 = {backgroundColor:"lightgreen",border:"0.3px solid rgba(0,0,0,.3)"}
  		const divStyle = {marginTop:"40px", width:"100%", boxShadow:"0px 5px 15px rgba(0,0,0,0.4)", padding:"20px 5px 20px 5px",backgroundColor:"#fff"}
        return ( 
        	<React.Fragment>
        		<div style={{textAlign:"center"}}>
					<div style={divStyle}>
					    <Row style={{backgroundColor:"pink"}}>
					      <Col span={12} style={style1}>
					      	<p>{`span={12}`}</p>
					      	<p>{`span={12}`}</p>
					      	<p>{`span={12}`}</p>
					      	<p>{`span={12}`}</p>
					      	<p>{`span={12}`}</p>
					      </Col>
					      <Col span={12} style={style1}>
					      	<p>{`span={12}`}</p>
					      	<Row>
					      		<Col span={12} style={style1}>
					      			<p>{`span={12} Hi`}</p>
					      		</Col>
					      		<Col span={12} style={style1}>
					      			<p>{`span={12} Hi`}</p>
					      		</Col>

					      		<Col span={6} style={style1}>
					      			<p>{`span={6}`}</p>
					      		</Col>
					      		<Col span={6} style={style1}>
					      			<p>{`span={6}`}</p>
					      		</Col>
					      		<Col span={6} style={style1}>
					      			<p>{`span={6}`}</p>
					      		</Col>
					      		<Col span={6} style={style1}>
					      			<p>{`span={6}`}</p>
					      		</Col>

					      		<Col span={8} style={style1}>
					      			<p>{`span={8}`}</p>
					      		</Col>
					      		<Col span={8} style={style1}>
					      			<p>{`span={8}`}</p>
					      		</Col>
					      		<Col span={8} style={style1}>
					      			<p>{`span={8}`}</p>
					      		</Col>

					      		<Col span={6} style={style1}>
					      			<p>{`span={6}`}</p>
					      		</Col>
					      		<Col span={12} style={style1}>
					      			<p>{`span={12}`}</p>
					      		</Col>
					      		<Col span={6} style={style1}>
					      			<p>{`span={6}`}</p>
					      		</Col>
					      	</Row>
					      </Col>
					    </Row>
					    <Row>
					      <Col span={8} style={style2}>col-8</Col>
					      <Col span={8} style={style2}>col-8</Col>
					      <Col span={8} style={style2}>col-8</Col>
					    </Row>
					</div>
			 	</div>
        	</React.Fragment>
         );
    }
}
 
export default MyGrid;