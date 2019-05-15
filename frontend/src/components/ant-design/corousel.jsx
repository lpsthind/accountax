import React, { Component } from 'react';
import { Carousel } from 'antd';
import "./corousel.css"

function onChange(a, b, c) {
  console.log(a, b, c);
}

class MyCorousel extends Component {
    state = {  }

    onChange = (a, b, c) => {
  		console.log(a, b, c);
	}


    render() { 
        return ( 
        	<React.Fragment>
        		<Carousel afterChange={this.onChange}>
				    <div><h3>1</h3></div>
				    <div><h3>2</h3></div>
				    <div><h3>3</h3></div>
				    <div><h3>4</h3></div>
				</Carousel>
				  <br/>
				  <br/>

				<Carousel vertical>
				    <div><h3>1</h3></div>
				    <div><h3>2</h3></div>
				    <div><h3>3</h3></div>
				    <div><h3>4</h3></div>
				</Carousel>
				 <br/>
				 <br/>

				<Carousel autoplay>
				    <div><h3>1</h3></div>
				    <div><h3>2</h3></div>
				    <div><h3>3</h3></div>
				    <div><h3>4</h3></div>
				</Carousel>

        	</React.Fragment>
         );
    }
}
 
export default MyCorousel;