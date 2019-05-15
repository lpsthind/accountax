import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import SideNav , { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faPowerOff, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
// import ElasticTabs from "../components/toggleHead";


class CustomLayout extends Component {
    state = {  }
    render() { 
        const iconSize = "1.45em"
        return (
            <div>
                <SideNav
                    onSelect={(selected) => {
                        console.log("Waheguru ji")
                        console.log(selected)
                    }}
                    style={{ position:"fixed" }}
                >
                    <Toggle />
                    <Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <FontAwesomeIcon icon={faHome} style={{ fontSize: iconSize }}/>
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="report">
                            <NavIcon>
                                <FontAwesomeIcon icon={faListAlt} style={{ fontSize: iconSize }}/>
                            </NavIcon>
                            <NavText>
                                Reports
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <FontAwesomeIcon icon={faChartLine} style={{ fontSize: iconSize }}/>
                            </NavIcon>
                            <NavText>
                                Charts
                            </NavText>
                            <NavItem eventKey="charts/linechart">
                                <NavText>
                                    Line Chart
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="charts/barchart">
                                <NavText>
                                    Bar Chart
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="setting">
                            <NavIcon>
                                <FontAwesomeIcon icon={faCogs} style={{ fontSize: iconSize }}/>
                            </NavIcon>
                            <NavText>
                                Settings
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="shut">
                            <NavIcon>
                                <FontAwesomeIcon icon={faPowerOff} style={{ fontSize: iconSize }}/>
                            </NavIcon>
                            <NavText>
                                Shut Down
                            </NavText>
                        </NavItem>
                    </Nav>
                </SideNav>
                
            </div>
        );
    }
} 
export default withRouter(CustomLayout);

