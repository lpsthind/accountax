import React from 'react';
import "./isearch.css";
import Button from '@material-ui/core/Button';
import { Scrollbars } from "react-custom-scrollbars";
import { Spring, config } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { message } from "antd";
import axios from "axios";

var countOfItems = 0
class OmniSearch extends React.Component {
  constructor(props) {
    super(props)
    this.isearchInputRef = React.createRef()
    this.isearchWrapperRef = React.createRef()
  }
  countOfItems = 0
  state = {
    active: false,
    inptError: false,
    searchKey: null,
    filteredData: {},
    filterResults:60,
    inptStyle:"uppercase"
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = (e) => {
    var cls = e.target.getAttribute("class")
    var props = this.props
    if (cls === "isearch-background") {
      this.setState({ active: false });
      this.props.omniBefCloseFunc()
      setTimeout(() => { this.props.closeOmniSearch()}, 250);
    }
  };

  handleSelect = () => {
    // this.setState({ active: true })
    console.log("")
  }

  componentWillUnmount = () => {
    countOfItems = 0
  }

  handleClientSelect = (e) => {
    var apiId = e.target.getAttribute("apiid")
    var usr = e.target.getAttribute("usr")
     
    var exceeds = ["ex60","ex200","ex1000"]

    if((apiId !== "warn") & ( exceeds.indexOf(apiId) === -1 ) & (usr === null)){
    	axios
	      .get(`http://127.0.0.1:8000/backend/api/${apiId}/`,
	        {
	        	// headers: { Authorization: `Token ${this.props.token}`},
	        	params:{ p:this.props.clientId, u:this.props.activeUser.nick }
	        }
	      )
	      .then(response => {
	        this.props.updateData(response.data)
	        this.setState({ active: false });
	        this.props.omniBefCloseFunc()
          setTimeout(() => { this.props.closeOmniSearch()}, 250);
	      })
	      .catch(err => console.log(err));
    }else if (usr !== null){
      message.config({maxCount:1})
      message.warn(`${usr.toUpperCase()} is working on this client. Please close it first.`,5);

    }else if( apiId === "ex60" ){
      // var srch = this.isearchInputRef.current.value
      var event = { target:{value:this.state.searchKey }, exceed:true, slice:200 }
      this.handleChange(event)
    }
    else if( apiId === "ex200" ){
      // var srch = this.isearchInputRef.current.value
      var event = { target:{value:this.state.searchKey }, exceed:true, slice:1000 }
      this.handleChange(event)
    }       
  }


  handleChange = (event) => {
    var inptVal = event.target.value
    this.setState({ searchKey: inptVal });

    var newData = []
    if (inptVal !== "" & inptVal !== "-" & inptVal !== ".") {
      if(inptVal[0] === "-" | inptVal[0] === "."){
        this.setState({inptStyle:"capitalize"})
      }else{
        this.setState({inptStyle:"uppercase"})
      }

      var t = inptVal[0] === "." ? "n" : inptVal[0] === "-" ? "a" : "p"
      if(t === "a"){
         inptVal = inptVal
              .toLowerCase()
              .replace("-", "")            
      } else{
        inptVal = inptVal
              .toLowerCase()
              .replace(" ", "")
              .replace(" ", "")
              .replace(" ", "")
              .replace(" ", "")  
              .replace("-", "")       
              .replace(".", "")
      }
      
      axios
        .get(`http://127.0.0.1:8000/backend/api/query/`,
          // {	headers: { Authorization: `Token ${this.props.token}`}},
          {params:{
            t : t,
          	q : inptVal,
          	n : event.exceed ? event.slice : this.state.filterResults,       
          }}
        )
        .then(response => {
          newData = [...response.data]
          // console.log(`${newData.length} Results`)
          if (newData.length === 0) {
            this.setState({
              filteredData: [
                {
                  fname: "----client does not exist----",
                  mname: "",
                  lname: "",
                  pan: "",
                  id: "warn",
                  code: "clientdoestnotexist",
                  activeUser:null,
                }
              ],
              active: true,
              inptError: true
            })            
          } else {
          	if(newData.length >= (event.exceed ? event.slice : this.state.filterResults)){
          		var lastLi = {
                  fname: `----Showning Only first ${event.exceed ? event.slice : this.state.filterResults} results----`,
                  mname: "",
                  lname: "",
                  pan: "",
                  id: `ex${ event.exceed ? event.slice : this.state.filterResults }`,
                  code: "limitexceed",
                  activeUser:null,
                }
          		newData.push(lastLi)
          	}
            this.setState({ filteredData: newData, active: true, inptError: false })
            console.log(`newData:${newData.length}`)
            // newData.map(node=>console.log(node))            
          }
        })
        .catch(err => console.log(err));
    } else if (inptVal === "") {
      this.setState({ active: false, inptError: false });
    }
  }

  render() {
    const content = (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={config.slow}
      >
        {props => (
          <div style={props}>
            <div className="isearch-content-div">
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={config.slow}
              >
                {props => (
                  <div style={props}>
                    
                    <div
                      ref={this.isearchWrapperRef}
                      className={`isearch-input-wrapper ${
                                  this.state.active ? 
                                  "active" : null} ${
                                  this.state.inptError ? 
                                  "error-wrap" : null} ${
                                  this.props.omniBeforeClose ? 
                                  "isearch-wrap-close" : null}`
                                } 
                    >
                      <FontAwesomeIcon className="isearch-icon-prefix" icon={faSearch}/>
                      <input
                        ref={this.isearchInputRef}
                        className={`isearch-input ${this.state.active ? "active" : null} ${this.state.inptError ? "error" : null}`}
                        type="text"
                        placeholder="..."
                        onChange={event => this.handleChange(event)}                      
                        onFocus={this.handleSelect}
                        style={{ textTransform:this.state.inptStyle }}
                      />
                    </div>         
                  </div>
                )}
              </Spring>
              {
                this.state.active
                  ? (
                    <Spring
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                    >
                      {props => (
                        <div style={props}>
                          <div style={{ width: this.isearchWrapperRef.current.offsetWidth }} className="isearch-scroll-content-div">
                            {this.state.filteredData.length > 6
                              ?
                              <Spring
                                from={{ opacity: 0, marginTop: -100 }}
                                to={{ opacity: 1, marginTop: 0 }}
                                config={config.slow}
                              >
                                {props => (
                                  <div style={props}>
                                    <Scrollbars style={{ height: "240px", width: "auto" }}>
                                      <Spring
                                        from={{ opacity: 0, marginTop: -1000 }}
                                        to={{ opacity: 1, marginTop: 0 }}
                                       >
                                        {props => (
                                          <div style={props}>
                                            <ul className="isearch-ul" >
                                              {this.state.filteredData.map((node) =>                                                
                                                <li
                                                  key={`${node.code}${node.id}`}
                                                  className="isearch-table-li"
                                                  apiid={node.id}
                                                  onClick={this.handleClientSelect}
                                                  usr={node.activeUser}
                                                >
                                                 {node.fname} {node.mname} {node.lname}
                                                 {node.pan !== "" ? " - " + node.pan : " "}
                                                 {node.activeUser && <span className="li-user">-{node.activeUser}</span>}                                                  
                                                </li>                                                                                        
	                                            )}
                                            </ul>
                                          </div>
                                        )}
                                      </Spring>
                                    </Scrollbars>
                                  </div>
                                )}
                              </Spring>
                              :
                              <Spring
                                from={{ opacity: 0, marginTop: -500 }}
                                to={{ opacity: 1, marginTop: 0 }}
                              >
                                {props => (
                                  <div style={props}>
                                    <ul className="isearch-ul" >
                                      {this.state.filteredData.map(node =>
                                        <li
                                          key={`${node.code}${node.id}`}
                                          className="isearch-table-li"
                                          apiid={node.id}
                                          onClick={this.handleClientSelect}
                                          usr={node.activeUser}
                                        >
                                          {node.fname} {node.mname} {node.lname} 
                                          {node.pan !== "" ? " - " + node.pan : " "}
                                          {node.activeUser && <span className="li-user">-{node.activeUser}</span>}
                                       </li>)}
                                    </ul>
                                  </div>
                                )}
                              </Spring>
                            }
                          </div>
                        </div>
                      )}
                    </Spring>
                  )
                  :
                  null
              }
            </div>
          </div>
        )}
      </Spring>)

    return (
      <div>
	    <Spring
	       from={{ opacity: 0, top: -100 }}
		   to={{ opacity: 1, top: 0 }}
		   config={config.slow}
        >
          {props => (
          	<div style={props}>
		        <div onClick={this.handleClose} className={this.props.openOmniSearch ? "isearch-background" : "hidden-back"}>
		          {this.props.openOmniSearch ?
		            <Spring
		              from={{ opacity: 0, marginTop: -500 }}
		              to={{ opacity: 1, marginTop: 0 }}
		            >
		              {props => (
		                <div style={props}>
		                  {content}
		                </div>
		              )}
		            </Spring>
		            :
		            null
		          }
		        </div>
             </div>
           	)}
        </Spring>

      </div>

    );
  }
}
export default OmniSearch;