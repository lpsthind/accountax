import "./Layout.4.css"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import { Scrollbars } from "react-custom-scrollbars";
import { Layout, Menu, Modal } from 'antd';
import { withRouter } from "react-router-dom"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faPowerOff, faCogs, faSearch , faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import ClientDrawer from "../components/clientsDrawer";
import TabBar from "../components/layout-tab";
import openSocket from "socket.io-client";
import TemporaryDrawer from "../components/addClientDrawer";
import OmniSearch from "../components/isearch";
import axios from "axios";


// const path = require("path");
const { remote } = window.require('electron');
const confirm = Modal.confirm;
const currentWindow = remote.getCurrentWindow()
const { Header, Content, Footer, Sider } = Layout;
// const SubMenu = Menu.SubMenu;
export const socket = openSocket("http://localhost:8080/", { transports: ['websocket'], upgrade: false });

class CustomLayout extends Component {
	state = {
		collapsed: true,
		clientDrawer: false,
		client: { id: null, fname: "Anonymous", mname: "", lname: "", pan: "" },
		addClientDrawer: false,
		omniSearchOpen: false,
		omniBeforeClose:false,
		activeUser:{id:100, name:"Lovepreet", nick:"love" },
		tabs:[
            { name:"Menu", nodeId:0, to:"/auth/" },
            { name:"Login", nodeId:1, to:"/auth/login/" },
            { name:"User", nodeId:2, to:"/auth/user/" },
            { name:"Socket", nodeId:3, to:"/auth/sockettest/" },
            { name:"Scroll", nodeId:4, to:"/auth/scroll/" },
            { name:"AntGrid", nodeId:5, to:"/auth/antgrid/" },
            { name:"Grid", nodeId:6, to:"/auth/mygrid/" },
            { name:"AntSpinner", nodeId:7, to:"/auth/antspinner/" },
            { name:"Components", nodeId:8, to:"/auth/uidesigns/" },
        ]
	};

	removeUser = () =>{
		axios
	      .get(`http://127.0.0.1:8000/backend/api/uupdate/`,
	        // { headers: { Authorization: `Token ${this.props.token}`} },
	        {params:{ u:this.state.activeUser.nick }}
	      )
	      .then(response => {
	        console.log(response.data)
	      })
	      .catch(err => console.log(err));
	    this.setState({client : { id: null, fname: "Anonymous", mname: "", lname: "", pan: "" }})
	}

	onCollapse = (collapsed) => {
		this.setState({ collapsed });		
	}

	handleHead = () => {
		this.setState({ collapsed: !this.state.collapsed })
	}

	loadingAlert = () => {
		this.props.history.push("/auth/clients/")
	}

	handleClient = (vals) => {
		this.setState({ client: vals })
		console.log(vals)
	}

	handleClose = () => {
		this.removeUser()
		confirm({
			title: 'Do you Want to exit?',
			content: 'AccounTrust',
			centered: true,
			onOk() {
				console.log('OK');
				currentWindow.close()
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	}

	handleMax = () => {
		if (currentWindow.isMaximized()) {
			currentWindow.unmaximize();
		} else {
			currentWindow.maximize();
		}
	}

	handleMin = () => {
		currentWindow.minimize()

	}

	handleChat = () => {
		socket.emit("chat", "This is from React");
	};

	handleCalc = () => {
		socket.emit("calc", 16);
	};

	handleclickOmniSearch = () => {
		this.setState({ omniSearchOpen: true });
	};

	

	componentDidMount = () => {
		socket.on("connected", message => {
			console.log(message);
		});
		socket.on("calcreply", res => {
			console.log(res);
		});

		socket.on("chatreply", res => {
			console.log(res);
		});
		this.removeUser()
	};

	render() {

		currentWindow.setTitle("AccounTrust")
		currentWindow.setHasShadow(true)
		currentWindow.setMovable(true)
		// currentWindow.setIcon(path.join(__dirname, '/src/win.ico'))
		const iconSize = "1.2em"
		const iconMenuSize = "0px"
		const footerStyle = {
			listStyle: "none",
			display: "inline-block",
			paddingLeft: "10px",
			paddingRight: "10px",
		}
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
					style={{ padding: "0px" , display:"none", }}
					theme="light"
					collapsedWidth={iconMenuSize}
					width="240"
				>
					<SideNav
						onSelect={(selected) => {
							if (selected === "shut") {
								this.props.loginPage()
							}
						}}
						style={{ 
							backgroundColor:"#24292e",
							minWidth:this.state.collapsed ? iconMenuSize : "240px",
							display:"none",
						}}
					>
						<Toggle 
							onClick={this.handleHead} 
							style={{
								width:this.state.collapsed ? iconMenuSize : "240px",
								minWidth:this.state.collapsed ? iconMenuSize : "240px",
								height:"35px",
								paddingTop:"0px",
								display:"none",
							}}/>
						<Nav 
							defaultSelected="home" 
							style={{
								width:this.state.collapsed ? iconMenuSize : "240px",
								minWidth:this.state.collapsed ? iconMenuSize : "240px",
								padding:"0",

							}}>
							<NavItem eventKey="home">
								<NavIcon style={{width:iconMenuSize}}>
									<FontAwesomeIcon icon={faHome} style={{ fontSize: iconSize, display:"none"}} />
								</NavIcon>
								<NavText>
									Home
                                </NavText>
							</NavItem>
							<NavItem eventKey="clients">
								<NavIcon style={{width:iconMenuSize}}>
									<FontAwesomeIcon icon={faListAlt} style={{ fontSize: iconSize, display:"none" }} />
								</NavIcon>
								<NavText>
									Client Master
                            </NavText>
							</NavItem>
							<NavItem eventKey="charts">
								<NavIcon style={{width:iconMenuSize}}>
									<FontAwesomeIcon icon={faChartLine} style={{ fontSize: iconSize, display:"none" }} />
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
								<NavIcon style={{width:iconMenuSize}}>
									<div onClick={this.handelSettings}>
										<FontAwesomeIcon icon={faCogs} style={{ fontSize: iconSize,display:"none" }} />
									</div>
								</NavIcon>
								<NavText>
									Settings
                                </NavText>
							</NavItem>
							<NavItem eventKey="shut">
								<NavIcon style={{width:iconMenuSize}}>
									<FontAwesomeIcon icon={faPowerOff} style={{ fontSize: iconSize,display:"none" }} />
								</NavIcon>
								<NavText>
									Shut Down
                                </NavText>
							</NavItem>
						</Nav>
					</SideNav>
				</Sider>

				<Layout style={{ backgroundColor: "#eeeeee" }}>
					<Header style={{
						zIndex: "900",
						color:"#fff",
						background:"#24292e",						
						fontStyle:"bold",
						padding: "0px 0px 0px 0px",
						lineHeight: "20px",
						height: "55px",  //28px
						WebkitAppRegion: "drag",
						borderBottom:"0.5px solid rgba(0,0,0,1)"
					}}
					>
						<div>
							<TabBar history={this.props.history} tabs={this.state.tabs} location={this.props.location} />
						</div>
						<div id="title-bar" style={{ float: "right" }}>
							<div id="title-bar-btns" style={{ position: "fixed", top: "0.5%", right: "0.50%" }}>
								<button className="win-head" id="min-btn" onClick={this.handleMin}></button>
								<button className="win-head" id="max-btn" onClick={this.handleMax}></button>
								<button className="win-head" id="close-btn" onClick={this.handleClose}></button>
							</div>
						</div>
						<div 
							style={{
								WebkitAppRegion: "none", 
								position:"relative", 
								border:"0.5px solid rgba(0,0,0,1)",
							}}>
							<ul style={{
								margin: "3px 4px 0px 5px",
								padding: "0px",
								display: "inline",
								float: "left",
								WebkitAppRegion: "none",

								// overflow: "hidden"
							}}>
								<li style={footerStyle}></li>
								<li style={footerStyle}></li>
								<li style={footerStyle}></li>
								<li style={footerStyle}></li>
								<li style={footerStyle}></li>
							</ul>
							<TemporaryDrawer
								addClientDrawer={this.state.addClientDrawer}
								addClientDrawerClose={() => { this.setState({ addClientDrawer: false }) }}
							/>
							<button
								type="submit"
								className="add-drawer-btn"
								onClick={() => { this.setState({ addClientDrawer: true }) }}
								style={{ float: "right", borderRadious: "0px",WebkitAppRegion: "none" }}
							>
								<FontAwesomeIcon  
									icon={faUserPlus} 
									style={{ fontSize: "1.2em" }}
									onClick={() => { this.setState({ addClientDrawer: true }) }}
								/>
	                		</button>
							<ClientDrawer
								removeUser={this.removeUser}
								clientId = {this.state.client.id}
								activeUser = {this.state.activeUser}
								handleClient={(vals) => this.handleClient(vals)}
								style={{ float: "right", borderRadious: "0px", WebkitAppRegion: "none" }}
								drawerPos={this.state.clientDrawerPos}
								client={this.state.client}
							/>


							<button
								type="submit"
								className="add-search-btn"
								onClick={() => { this.setState({ omniSearchOpen: true }) }}
								style={{ float: "right", borderRadious: "0px",WebkitAppRegion: "none", }}
							>
								<FontAwesomeIcon  
									icon={faSearch} 
									style={{ fontSize: "1.2em" }}
									onClick={() => { this.setState({ omniSearchOpen: true }) }}
								/>
	                		</button>
							<OmniSearch
								clientId = {this.state.client.id}
								activeUser = {this.state.activeUser}
								openOmniSearch={this.state.omniSearchOpen}
								updateData={(vals) => this.handleClient(vals)}
								closeOmniSearch={() => { this.setState({ omniSearchOpen: false, omniBeforeClose:false }) }}
								omniBefCloseFunc={()=>{this.setState({omniBeforeClose:true})}}
								omniBeforeClose={this.state.omniBeforeClose}
							/>
						</div>
					</Header>


					<Content style={{
						margin: '10px 10px 10px 10px',
						backgroundColor: "#eeeeee",
						// border:"0.5px solid lightgrey",
					}}>	
						<div>
						    <Scrollbars 
						    	autoHide 
						    	style={{ height: "calc(100vh - 80px)", width: "calc(100% - 0px)" }}
						    	renderTrackHorizontal={props => <div/>}
						    	renderThumbHorizontal={props => <div/>}
						    >
								{this.props.children}
							</Scrollbars>
						</div>						
					</Content>




					{/* <Footer style={{
										textAlign: 'center',
										padding: "0px",
										backgroundColor: "grey",
										color: "#fff",
									}}>
										<ul style={{
											margin: "3px 4px 0px 5px",
											padding: "0px",
											display: "inline",
											float: "left",
											// overflow: "hidden"
										}}>
											<li style={footerStyle}>Footbar1</li>
											<li style={footerStyle}>Footbar2</li>
											<li style={footerStyle}>Footbar3</li>
											<li style={footerStyle}>Footbar4</li>
											<li style={footerStyle}>Footbar5</li>
										</ul>
										<TemporaryDrawer
											addClientDrawer={this.state.addClientDrawer}
											addClientDrawerClose={() => { this.setState({ addClientDrawer: false }) }}
										/>
										<button
											type="submit"
											className="add-drawer-btn"
											onClick={() => { this.setState({ addClientDrawer: true }) }}
											style={{ float: "right", borderRadious: "0px" }}
										>
											<FontAwesomeIcon  
												icon={faUserPlus} 
												style={{ fontSize: "1.2em" }}
												onClick={() => { this.setState({ addClientDrawer: true }) }}
											/>
				                		</button>
										<ClientDrawer
											removeUser={this.removeUser}
											clientId = {this.state.client.id}
											activeUser = {this.state.activeUser}
											handleClient={(vals) => this.handleClient(vals)}
											style={{ float: "right", borderRadious: "0px" }}
											drawerPos={this.state.clientDrawerPos}
											client={this.state.client}
										/>
				
				
										<button
											type="submit"
											className="add-search-btn"
											onClick={() => { this.setState({ omniSearchOpen: true }) }}
											style={{ float: "right", borderRadious: "0px" }}
										>
											<FontAwesomeIcon  
												icon={faSearch} 
												style={{ fontSize: "1.2em" }}
												onClick={() => { this.setState({ omniSearchOpen: true }) }}
											/>
				                		</button>
										<OmniSearch
											clientId = {this.state.client.id}
											activeUser = {this.state.activeUser}
											openOmniSearch={this.state.omniSearchOpen}
											updateData={(vals) => this.handleClient(vals)}
											closeOmniSearch={() => { this.setState({ omniSearchOpen: false, omniBeforeClose:false }) }}
											omniBefCloseFunc={()=>{this.setState({omniBeforeClose:true})}}
											omniBeforeClose={this.state.omniBeforeClose}
										/>
										
									</Footer> */}
				</Layout>
			</Layout>
		);
	}
}
export default withRouter(CustomLayout);

