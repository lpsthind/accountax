import { Drawer,Popover,message } from 'antd';
import React from 'react';
import ClientMaster from './clients';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faArrowCircleRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


class ClientDrawer extends React.Component {
  state = { 
          visible: false, 
          load:false,
        };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    })
  };

  componentDidMount =()=>{
    this.setState({load:!this.state.load})
  }

  handleCopy=(e)=>{
    e.persist()
    navigator.clipboard.writeText(e.target.innerText)
    message.success('Copied..!!',0.7);
  }

  render() {
    const text = <span style={{
                          textTransform:"uppercase",
                          fontSize:"20px",
                          display:"inline",
                        }}>
          {`${this.props.client.fname}  ${
              this.props.client.mname}  ${
              this.props.client.lname} ${
              this.props.client.id !== null ? " - (" + this.props.client.code + ")" : ""}`
          }
          <FontAwesomeIcon 
            icon={faThumbsUp} 
            className="cls-icon-pop-drawer" 
            onClick={this.props.removeUser}
            style={{ 
              fontSize: "1.2em",
              display:"inline",
              float:"right",
              margin:"4px 15px auto 15px",

            }}
          />
        </span>;
    const clientDrawerPopoverContent = (
      <div >
         <table width="100%" className="popover-table" border="1">
          <thead className="popover-thead">
            <tr>
              <th className="popover-th">First Name</th>
              <th className="popover-th">Mid Name</th>
              <th className="popover-th">Last Name</th>
            </tr>
          </thead>
          <tbody className="popover-tbody">
            <tr className="popover-tr">
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.fname}</td>
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.mname}</td>
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.lname}</td>
            </tr>
          </tbody>
        </table>

        <table width="100%" className="popover-table" border="1" style={{marginTop:"10px"}}>
          <thead className="popover-thead">
            <tr>
              <th className="popover-th">PAN</th>
              {/* <th className="popover-th">Password</th> */}
              <th className="popover-th">D.O.B</th>
              <th className="popover-th">Phone</th>
              <th className="popover-th">Adhaar</th>
            </tr>
          </thead>
          <tbody className="popover-tbody">
            <tr className="popover-tr">
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.pan}</td>
              {/* <td className="popover-td">{this.props.client.eFlPass}</td> */}
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.dob && this.props.client.dob.split("T")[0]}</td>
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.phone}</td>
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.adhar}</td>
            </tr>
          </tbody>
        </table>

        <table width="100%" border="1" className="popover-table" style={{marginTop:"10px"}}>
          <thead className="popover-thead">
            <tr>
              <th className="popover-th">Address1</th>
              <th className="popover-th">Address2</th>
              <th className="popover-th">Address3</th>
              <th className="popover-th">Address4</th>
              <th className="popover-th">PIN</th>
              <th className="popover-th">Email</th>
            </tr>

          </thead>
          <tbody className="popover-tbody">
            <tr className="popover-tr">
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.address1}</td>
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.address2}</td>
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.address3}</td>
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.address4}</td>
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.pincode}</td>
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.email}</td>
            </tr>
          </tbody>
        </table>

        <table width="100%" border="1" className="popover-table" style={{marginTop:"10px"}}>
          <thead className="popover-thead">
            <tr>
              <th className="popover-th">Assessee Type</th>
              <th className="popover-th">Business Name</th>
            </tr>
          </thead>
          <tbody className="popover-tbody">
            <tr className="popover-tr">
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.assesee_type}</td>
              <td onClick={this.handleCopy} className="popover-td">{this.props.client.business_name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    const noClient = (
        React.createElement(
          'div',
          {className:"pop-noclient-div"},
          React.createElement(
            'div',
            {className:"pop-noclient-content"},
            "No Client Selected"
            )
          )
      )


    return (
      <div>
        <Popover 
          placement="topRight" 
          title={text} 
          content={this.props.client.id !== null ? clientDrawerPopoverContent : noClient } 
          trigger="hover"
          mouseEnterDelay={0.5}
        >
          <button
            key={"drawerBtn1z"}
            className="drawer-btn"
            type="button"
            onClick={this.showDrawer}
            style={this.props.style}
          >
            {this.props.client.lname == "" 
              ? 
                <FontAwesomeIcon 
                  icon={faUser} 
                  style={{ fontSize: "1.2em" }}
                  onClick={this.showDrawer}
                />
              :
                `${this.props.client.fname} ${this.props.client.mname} ${this.props.client.lname}${this.props.client.lname === "" ? "" : "-"}${this.props.client.pan}`
            }
          </button>
        </Popover>
        <Drawer
          title="Client Master"
          placement="top"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          closable={true}
          destroyOnClose={true}
          style={{zIndex:9999}}
          height="100vh"
        >
          <div style={{height:"90vh", width:"102%",WebkitAppRegion:"none"}}>
            { 
              this.state.load 
                ? 
                <ClientMaster 
                    handleClient={(vals)=>this.props.handleClient(vals)} 
                    handleClose={this.onClose}
                    clientId = {this.props.clientId}
                    activeUser = {this.props.activeUser}
                /> 
                : 
              "Loading"
            }
          </div>
        </Drawer>
      </div>
    );
  }
}
export default ClientDrawer;
