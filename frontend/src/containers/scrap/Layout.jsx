import React, { Component } from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {withRouter} from "react-router-dom"
import ElasticTabs from "../components/toggleHead";
import "./Layout.css"

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
class CustomLayout extends Component {
state = {
    collapsed: true,
};

elemRef =()=> React.createRef()

onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
}

handleClick =(e)=>{
    console.log(this.refs)
    console.log(this.elemRef.current)

}
render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                style = {{padding:"0px"}}
                theme = "dark"
                // collapsedWidth = "80"
            >
                {/* <div className="logo" /> */}
                <Menu 
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    style = {{padding:"0px",marginTop:"-4px"}}
                    theme = "dark"
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                    key="sub1"
                    title={<span><Icon type="user" /><span>User</span></span>}
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                    key="sub2"
                    title={<span><Icon type="team" /><span>Team</span></span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout style={{backgroundColor:"#fff"}}>
            <Header style={{ 
                    zIndex:"9999",
                    background: 'white', 
                    padding:"5px 0px 5px 0px", 
                    lineHeight:"20px",
                    // height:"50px",
                }}
            > 
            <div>     
                <ElasticTabs/>
            </div> 
            </Header>

            <Content style={{ margin: '0 0px',backgroundColor:"#fff" }}>
                    {/* {this.props.children} */}
            </Content>
            <Footer style={{ textAlign: 'center', padding:"4px", backgroundColor:"grey",color:"#fff" }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>
            </Layout>
        </Layout>
        );
    }
}
export default withRouter(CustomLayout);
