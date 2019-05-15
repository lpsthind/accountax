import React from 'react';
import { Row, Col } from 'antd';
import "./grid.css"


const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
class Grids extends React.Component {
  state = {};
  render() {
  	const style1 = {backgroundColor:"lightblue",border:"0.3px solid rgba(0,0,0,.3)"}
  	const style2 = {backgroundColor:"lightgreen",border:"0.3px solid rgba(0,0,0,.3)"}
  	const divStyle = {marginTop:"40px", width:"100%", boxShadow:"0px 5px 15px rgba(0,0,0,0.4)", padding:"20px 5px 20px 5px",backgroundColor:"#fff"}
  	return (
  		<React.Fragment>
  			<div style={{textAlign:"center"}}>
				<div style={divStyle}>
				    <Row style={{backgroundColor:"pink"}}>
				      <Col span={12} style={style1}>col-12</Col>
				      <Col span={12} style={style1}>col-12</Col>
				    </Row>
				    <Row>
				      <Col span={8} style={style2}>col-8</Col>
				      <Col span={8} style={style2}>col-8</Col>
				      <Col span={8} style={style2}>col-8</Col>
				    </Row>
				    <Row>
				      <Col span={6} style={style1}>col-6</Col>
				      <Col span={6} style={style1}>col-6</Col>
				      <Col span={6} style={style1}>col-6</Col>
				      <Col span={6} style={style1}>col-6</Col>
				    </Row>
			 	</div>

			 	 <div className="gutter-example" style={divStyle}>  
			 	 	{`You can use the gutter property of Row as grid spacing, we recommend set it to (16 + 8n) px. (n stands for natural number.`}
				    <Row gutter={16}>
				      <Col className="gutter-row" span={6}>
				        <div className="gutter-box">col-6</div>
				      </Col>
				      <Col className="gutter-row" span={6}>
				        <div className="gutter-box">col-6</div>
				      </Col>
				      <Col className="gutter-row" span={6}>
				        <div className="gutter-box">col-6</div>
				      </Col>
				      <Col className="gutter-row" span={6}>
				        <div className="gutter-box">col-6</div>
				      </Col>
				    </Row>
				 </div>

				<div style={divStyle}>
				{`Offset can set the column to the right side. For example, using offset = {4} can set the element shifted to the right four columns width`}
				    <Row>
				      <Col  span={8} style={style2}>col-8</Col>
				      <Col span={8} offset={8} style={style2}>col-8</Col>
				    </Row>
				    <Row>
				      <Col span={6} offset={6} style={style1}>col-6 col-offset-6</Col>
				      <Col span={6} offset={6} style={style1}>col-6 col-offset-6</Col>
				    </Row>
				    <Row>
				      <Col span={12} offset={6} style={style2}>col-12 col-offset-6</Col>
				    </Row>
				</div>

				<div style={divStyle}>
				{`By using push and pull class you can easily change column order `}
			    <Row>
			      <Col span={18} push={6} style={style1}>col-18 col-push-6</Col>
			      <Col span={6} pull={18} style={style1}>col-6 col-pull-18</Col>
			    </Row>
			  </div>

			{/* JUTIFY */}
				<div style={divStyle}>
				{`JUSTIFY GRIDS:`}
				    <p>sub-element align left</p>
				    <Row type="flex" justify="start">
				      <Col span={4} style={style2}>{`justify="start"`}</Col>
				      <Col span={4} style={style2}>{`justify="start"`}</Col>
				      <Col span={4} style={style2}>{`justify="start"`}</Col>
				      <Col span={4} style={style2}>{`justify="start"`}</Col>
				    </Row>

				    <p>sub-element align center</p>
				    <Row type="flex" justify="center">
				      <Col span={4} style={style1}>{`justify="center"`}</Col>
				      <Col span={4} style={style1}>{`justify="center"`}</Col>
				      <Col span={4} style={style1}>{`justify="center"`}</Col>
				      <Col span={4} style={style1}>{`justify="center"`}</Col>
				    </Row>

				    <p>sub-element align right</p>
				    <Row type="flex" justify="end">
				      <Col span={4} style={style2}>{`justify="end"`}</Col>
				      <Col span={4} style={style2}>{`justify="end"`}</Col>
				      <Col span={4} style={style2}>{`justify="end"`}</Col>
				      <Col span={4} style={style2}>{`justify="end"`}</Col>
				    </Row>

				    <p>sub-element monospaced arrangement</p>
				    <Row type="flex" justify="space-between">
				      <Col span={4} style={style1}>{`justify="space-between"`}</Col>
				      <Col span={4} style={style1}>{`justify="space-between"`}</Col>
				      <Col span={4} style={style1}>{`justify="space-between"`}</Col>
				      <Col span={4} style={style1}>{`justify="space-between"`}</Col>
				    </Row>

				    <p>sub-element align full</p>
				    <Row type="flex" justify="space-around">
				      <Col span={4} style={style2}>{`justify="space-around"`}</Col>
				      <Col span={4} style={style2}>{`justify="space-around"`}</Col>
				      <Col span={4} style={style2}>{`justify="space-around"`}</Col>
				      <Col span={4} style={style2}>{`justify="space-around"`}</Col>
				    </Row>
				 </div>

				<div style={divStyle}>
				    <p>Align Top</p>
				    <Row type="flex" justify="center" align="top">
				      <Col span={4} style={style1}><DemoBox value={100}>col-4</DemoBox></Col>
				      <Col span={4} style={style1}><DemoBox value={50}>col-4</DemoBox></Col>
				      <Col span={4} style={style1}><DemoBox value={120}>col-4</DemoBox></Col>
				      <Col span={4} style={style1}><DemoBox value={80}>col-4</DemoBox></Col>
				    </Row>

				    <p>Align Center</p>
				    <Row type="flex" justify="space-around" align="middle">
				      <Col span={4} style={style2}><DemoBox value={100}>col-4</DemoBox></Col>
				      <Col span={4} style={style2}><DemoBox value={50}>col-4</DemoBox></Col>
				      <Col span={4} style={style2}><DemoBox value={120}>col-4</DemoBox></Col>
				      <Col span={4} style={style2}><DemoBox value={80}>col-4</DemoBox></Col>
				    </Row>

				    <p>Align Bottom</p>
				    <Row type="flex" justify="space-between" align="bottom">
				      <Col span={4} style={style1}><DemoBox value={100}>col-4</DemoBox></Col>
				      <Col span={6} style={style1}><DemoBox value={50}>col-6</DemoBox></Col>
				      <Col span={6} style={style1}><DemoBox value={120}>col-6</DemoBox></Col>
				      <Col span={4} style={style1}><DemoBox value={80}>col-4</DemoBox></Col>
				    </Row>
				</div>

				<div style={divStyle}>
				{`CHANGE ORDER OF COLS`}
				    <Row type="flex">
				      <Col span={6} style={style2} order={4}>{`order={4} - 1`}</Col>
				      <Col span={6} style={style2} order={3}>{`order={3} - 2`}</Col>
				      <Col span={6} style={style2} order={2}>{`order={2} - 3`}</Col>
				      <Col span={6} style={style2} order={1}>{`order={1} - 4`}</Col>
				    </Row>
				</div>

				<div style={divStyle}>
				{`Referring to the Bootstrap responsive design, here preset five dimensions: xs sm md lg xl.`}
				  <Row>
				    <Col style={style1} xs={2} sm={4} md={6} lg={8} xl={10}>{`xs={2} sm={4} md={6} lg={8} xl={10}`}</Col>
				    <Col style={style1} xs={20} sm={16} md={12} lg={8} xl={4}>{`xs={20} sm={16} md={12} lg={8} xl={4}`}</Col>
				    <Col style={style1} xs={2} sm={4} md={6} lg={8} xl={10}>{'xs={2} sm={4} md={6} lg={8} xl={10}'}</Col>
				  </Row>
				</div>

				<div style={divStyle}>
					{`Span , pull , push , offset , order property can be embedded into xs , sm , md , lg , xl properties to use,
			 		where xs = {6} is equivalent to xs = {{span: 6}}`}
					<Row>
					    <Col style={style2} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>{`xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}`}</Col>
					    <Col style={style2} xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>{`xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}`}</Col>
					    <Col style={style2} xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>{`xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}`}</Col>
					</Row>
				</div>
			</div>

		</React.Fragment>	
  	)}
 }export default Grids;