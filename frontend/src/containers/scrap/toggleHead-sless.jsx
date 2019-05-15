import React, { Component } from 'react';
import "./my_header.css"
import {NavLink, withRouter} from "react-router-dom"


class CompTabs extends Component {
    handleClick=(e)=>{
        var key = this.props.keyNumber
        var rect = e.target.getBoundingClientRect()

        this.props.handleClick({key:key,rect:rect})
    }
    render() { 
        const tabClassName = "linkClass"
        const activateTab = this.props.activeKey === this.props.keyNumber ? "header-active" : null 
        return ( 
            <React.Fragment>
                <NavLink 
                    to={this.props.to}
                    className={`${tabClassName} ${activateTab}`}
                    onClick={this.handleClick}
                >
                    {this.props.text}
                </NavLink>
            </React.Fragment>
        );
    }
}
export default withRouter(CompTabs);
