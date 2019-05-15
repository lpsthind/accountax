import React, { Component } from 'react';
import "./layout-tab.css"
// import { NavLink } from "react-router-dom"

class TabBar extends Component {
    state = {
        active:0, 
        curentPath:null,
    }
    
    handleClick =(event)=>{
        event.persist()
        var nodeId = event.target.getAttribute("nodeid")
        var to = event.target.getAttribute("to")
        this.setState({curentPath:to})
        this.props.history.push(to)
    }

    componentDidMount=()=>{
        var to = this.props.location.pathname
        this.setState({curentPath:to})
    }

    render() {
        return (
            <React.Fragment>
                <ul key="headtabs001" className="head-ul">
                    {this.props.tabs.map(node=>
                        <li
                            key={`headtabsli${node.nodeId}`}
                            className={`head-li ${node.to === this.state.curentPath ? "active" : null}`} 
                            nodeid={node.nodeId}
                            to={node.to}
                            onClick={this.handleClick}
                        >
                            {node.name}
                        </li>
                    )}
                </ul>
            </React.Fragment>
         );
    }
}
export default TabBar;
