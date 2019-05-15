import React, { Component } from 'react';
import axios from "axios";
import { Spin } from "antd";
import "./client.css"

class ClientMaster extends Component {
    constructor(props){
        super(props)
        this.refa = React.createRef()
        this.refb = React.createRef()
        this.refc = React.createRef()
        this.refd = React.createRef()
        this.refe = React.createRef()
        this.reff = React.createRef()
        this.refg = React.createRef()
        this.refh = React.createRef()
        this.refi = React.createRef()
        this.refj = React.createRef()
        this.refk = React.createRef()
        this.refl = React.createRef()
        this.refHa = React.createRef()
        this.refHb = React.createRef()
        this.refHc = React.createRef()
        this.refHd = React.createRef()
        this.refHe = React.createRef()
        this.refHf = React.createRef()
        this.refHg = React.createRef()
        this.refHh = React.createRef()
        this.refHi = React.createRef()
        this.refHj = React.createRef()
        this.refHk = React.createRef()
        this.refHl = React.createRef()
    }
    state = { 
        clientList:null,
        mounted:false,
        updated:{first:false},
        width:{
            ha:null,hb:null,
            hc:null,hd:null,
            he:null,hf:null,
            hg:null,hh:null,
            hi:null,hj:null,
            hk:null,hl:null,
        },
        getError:null,
    }

    handleClick=(e)=>{
        e.persist()
        var apiId = e.target.getAttribute("apiid")
        axios
            .get(`http://127.0.0.1:8000/backend/api/${apiId}/`,
                // headers: { Authorization: `Token ${this.props.token}`},
                { params:{ p:this.props.clientId, u:this.props.activeUser.nick }}
            )
            .then(response => {
                this.props.handleClient(response.data)
            })
            .catch(err => console.log(err));
        this.props.handleClose()
    }

    componentDidMount =()=>{
        axios
          .get(`http://127.0.0.1:8000/backend/api/`,
                // headers: { Authorization: `Token ${this.props.token}`},
            )
            .then(response => {
                this.setState({ clientList: response.data });
            })
            .catch(err =>{
                console.log(err)
                this.setState({getError:err})
            });
        this.setState({mounted:true})   
    }

    componentDidUpdate=()=>{
        if(this.state.clientList && this.state.updated.first === false){
            var updated = {first:true,second:false,third:false}
            var width = {
                ha:this.refa.current.offsetWidth , hb:this.refb.current.offsetWidth,
                hc:this.refc.current.offsetWidth , hd:this.refd.current.offsetWidth,
                he:this.refe.current.offsetWidth , hf:this.reff.current.offsetWidth,
                hg:this.refg.current.offsetWidth , hh:this.refh.current.offsetWidth + 15
            }
            this.setState({width:width,updated:updated})
        }
    }
    

    render() { 
        return ( 
            <div style={{
                    padding:"0px 0px 0px 0px",
                    marginLeft:"0%"
                }}>

                {this.state.getError 
                ?             
                    <div style={{
                            marginLeft:"50%",
                            marginTop:"10%",
                            transform:"translate(-50%,-10%)",
                            border:"0.5px solid rgb(0, 33, 64)",
                            textAlign:"center",
                            width:"400px",
                        }}>
                        <h1 style={{color:"#db3d44"}}>Error:</h1>
                        <h2 style={{color:"#db3d44"}}>Cannot make requeuest.</h2>
                    </div>    
                :
                (    
                    (this.state.clientList 
                        ? 
                        <table key={"1n"} 
                                border="1"
                                style={{
                                    color:"rgba(0,0,0,0.7)",
                                    border:"0.5px solid rgba(0,0,0,0.1)"
                                }}
                            >
                            <thead style={{display:"block"}}>
                                <tr key={"1m"} style={{
                                                backgroundColor:"rgb(0, 33, 64)",
                                                color:"#fff",
                                                borderColor:"white",
                                            }}>
                                    {/* 'code','fname','mname','lname','pan','dob','eFlPass','address1','address2','address3','address4','pincode','phone','email','business_name','assesee_type','adhar') */}

                                    <th ref={this.refHa} style={{width:this.state.width.ha}} className="drawer-client-head" key={"1a"}>Code</th>
                                    <th ref={this.refHb} style={{width:this.state.width.hb}} className="drawer-client-head" key={"1b"}>Name</th>
                                    <th ref={this.refHc} style={{width:this.state.width.hc}} className="drawer-client-head" key={"1c"}>PAN</th>
                                    <th ref={this.refHd} style={{width:this.state.width.hd}} className="drawer-client-head" key={"1e"}>Address</th>
                                    <th ref={this.refHe} style={{width:this.state.width.he}} className="drawer-client-head" key={"1f"}>PIN</th>
                                    <th ref={this.refHf} style={{width:this.state.width.hf}} className="drawer-client-head" key={"1g"}>Phone</th>
                                    <th ref={this.refHg} style={{width:this.state.width.hg}} className="drawer-client-head" key={"1i"}>Business</th>
                                    <th ref={this.refHh} style={{width:this.state.width.hh}} className="drawer-client-head" key={"1j"}>Assessee</th>
                                </tr>
                            </thead>
                            <tbody key={"1o"} style={{height:"80vh",display:"block",overflow:"scroll"}}>
                            {this.state.clientList ? 
                                this.state.clientList.map(node=>
                                    <tr 
                                    className="drawer-client" 
                                    onClick={this.handleClick} 
                                    code={`code${node.code}`} 
                                    key={`aa${node.code}`}
                                    clientname={`${node.fname} ${node.mname} ${node.lname}`}
                                    apiid={node.id}
                                    >
                                        <td ref={this.refa} code={node.code} apiid={node.id} key={`ab${node.code}`}>{node.code}</td>
                                        <td ref={this.refb} code={node.code} apiid={node.id} key={`ac${node.code}`}>{`${node.fname} ${node.mname} ${node.lname}`}</td>
                                        <td ref={this.refc} code={node.code} apiid={node.id} key={`ad${node.code}`}>{node.pan}</td>
                                        <td ref={this.refd} code={node.code} apiid={node.id} key={`af${node.code}`}>{`${node.address1} ${node.address2} ${node.address3} ${node.address4}`}</td>
                                        <td ref={this.refe} code={node.code} apiid={node.id} key={`ag${node.code}`}>{node.pincode}</td>
                                        <td ref={this.reff} code={node.code} apiid={node.id} key={`ah${node.code}`}>{node.phone}</td>
                                        <td ref={this.refg} code={node.code} apiid={node.id} key={`aj${node.code}`}>{node.business_name}</td>
                                        <td ref={this.refh} code={node.code} apiid={node.id} key={`ak${node.code}`}>{node.assesee_type}</td>
                                    </tr>)
                                : null}
                            </tbody>
                        </table>
                        :
                        <div 
                          style={{
                              textAlign:"center",
                             backgoundColor:"rgba(0,0,0,0.5)",
                             borderRadius:"4px",
                             marginBottom:"20px",
                             padding:"30px 50px",
                             margin:"20px 0px"
                          }}
                        >
                            <Spin />
                        </div>
                        )
                    )
                }
            </div>
         );
    }
}
 
export default ClientMaster;