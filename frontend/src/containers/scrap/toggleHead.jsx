import React, { Component,forwardRef } from 'react';
import "./my_header.css"
import CompTabs from '../components/toggleHead-sless';
import {withRouter} from "react-router-dom"


class ElasticTabs extends Component {
  state = { 
    bars:[
      {key:1,name:"Nav1",text:"Menu",to:"/"},
      {key:2,name:"Nav2",text:"Tax",to:"/auth/"},
      {key:3,name:"Nav3",text:"Challan",to:"/auth/login/"},
      {key:4,name:"Nav4",text:"ITR",to:"/auth/popover/"},
      {key:5,name:"Nav5",text:"26AS",to:"/"},
      {key:6,name:"Nav6",text:"Heads",to:"/"},
      {key:7,name:"Nav5",text:"Deductions",to:"/"},
      {key:8,name:"Nav6",text:"Help",to:"/"},
    ],
    currentActiveKey:0,
    rect:{left:0,width:0},
  }

  setActive = (k) => {
    var rect = {...this.state.rect}
    if (this.props.collpased){
      rect.left = k.rect.left - 64
    }else{
      rect.left = k.rect.left - 240
    }

    rect.width = k.rect.width
    this.setState({currentActiveKey:k.key, rect:rect})
  }

  render() { 
    return (
        <div className="my-wrapper">
            <nav className="my-tabs">
                <div className="my-selector" style={{left:`${this.state.rect.left}px`, width:this.state.rect.width}}></div>  
                  {this.state.bars.map(node=>
                    <CompTabs
                      name={node.name}
                      text = {node.text}
                      to={node.to}
                      key={node.key}
                      keyNumber={node.key} 
                      activeKey={this.state.currentActiveKey}
                      handleClick={(k)=> this.setActive(k)}
                      state = {this.state} 
                  />
                  )}
            </nav>
        </div>
      );
  }
}
 
export default withRouter(ElasticTabs);