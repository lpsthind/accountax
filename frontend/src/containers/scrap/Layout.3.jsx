import "./Layout.css"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import {Layout, Menu } from 'antd';
import {withRouter} from "react-router-dom"
import ElasticTabs from "./toggleHead";
import SideNav , { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faPowerOff, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import ClientDrawer from "../components/clientsDrawer";
const { remote, BrowserWindow } = window.require('electron')

const currentWindow = remote.getCurrentWindow()
// Get all windows
// const allWindows = BrowserWindow.getAllWindows()
// const focussedWindow = BrowserWindow.getFocusedWindow()
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;


class CustomLayout extends Component {
state = {
    collapsed: true,
    clientDrawer:false,
    client:{fname:"Anonymous",mname:"",lname:"",pan:""},
};

onCollapse = (collapsed) => {
    this.setState({ collapsed });
}

handleHead=()=>{
    this.setState({collapsed:!this.state.collapsed})
}

loadingAlert=()=>{
    this.props.history.push("/auth/clients/")
}

handleClient=(vals)=>{
    this.setState({client:vals})
    console.log(vals)
}

handleClose=()=>{
    currentWindow.close()
}
handleMax=()=>{
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize();
    } else {
        currentWindow.maximize();
    }
    
}
handleMin=()=>{
    currentWindow.minimize()
    
}


render() {
    currentWindow.setHasShadow(true)
    currentWindow.setMovable(true)
    const iconSize = "1.45em"
    const footerStyle = {
                        listStyle:"none",
                        display:"inline-block",
                        paddingLeft:"10px",
                        paddingRight:"10px",
                    }
    return (
        <Layout style={{ minHeight: '100vh'}}>
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                style = {{padding:"0px"}}
                theme = "light"
                collapsedWidth = "64"
                width="240"
            >
                <SideNav
                    onSelect={(selected) => {
                        if(selected==="shut"){
                            this.props.loginPage()
                        }
                    }}
                    style={{ backgroundColor:"#002140"}}
                >
                    <Toggle onClick={this.handleHead}/>
                    <Nav defaultSelected="home" >
                        <NavItem eventKey="home">
                                <NavIcon>
                                    <FontAwesomeIcon icon={faHome} style={{ fontSize: iconSize }}/>
                                </NavIcon>
                                <NavText>
                                    Home
                                </NavText>
                        </NavItem>
                        <NavItem eventKey="clients">
                            <NavIcon>
                                <FontAwesomeIcon icon={faListAlt} style={{ fontSize: iconSize }}/>
                            </NavIcon>
                            <NavText>
                                Client Master
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
                                    <div onClick={this.handelSettings}>
                                        <FontAwesomeIcon icon={faCogs} style={{ fontSize: iconSize }}/>
                                    </div>
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
            </Sider>

            <Layout style={{backgroundColor:"#fff"}}>
            <Header style={{ 
                    zIndex:"900",
                    background: 'white', 
                    padding:"5px 0px 5px 0px", 
                    lineHeight:"20px",
                    height:"45px",
                }}
            > 
            <div>     
                <ElasticTabs collpased={this.state.collapsed}/>
            </div>
            <div id="title-bar" style={{float:"right"}}>
                <div id="title-bar-btns">
                    <button className="win-head" id="min-btn" onClick={this.handleMin}></button>
                    <button className="win-head" id="max-btn" onClick={this.handleMax}></button>
                    <button className="win-head" id="close-btn" onClick={this.handleClose}></button>
                </div>
            </div>
            </Header>
            
            <Content style={{ margin: '20px 30px 20px 30px',
                                backgroundColor:"#fff", 
                            }}>
                    {this.props.children}
            </Content>
            
            <Footer style={{ textAlign: 'center', 
                            padding:"0px", 
                            backgroundColor:"grey",
                            color:"#fff",
                            display:"inline",
                        }}>
                <ul style={{margin:"3px 4px 0px 5px",
                            padding:"0px",
                            display:"inline",
                            float:"left",
                            overflow:"hidden"
                        }}>
                    <li style={footerStyle}>Footbar1</li>
                    <li style={footerStyle}>Footbar2</li>
                    <li style={footerStyle}>Footbar3</li>
                    <li style={footerStyle}>Footbar4</li>
                    <li style={footerStyle}>Footbar5</li>
                </ul>
                <ClientDrawer 
                    handleClient={(vals)=>this.handleClient(vals)} 
                    style={{float:"right",borderRadious:"0px"}}
                    drawerPos={this.state.clientDrawerPos}
                    client={this.state.client}
                />
            </Footer>
            </Layout>
        </Layout>
        );
    }
}
export default withRouter(CustomLayout);
