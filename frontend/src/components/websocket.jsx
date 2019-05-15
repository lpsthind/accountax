import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import openSocket from "socket.io-client";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TemporaryDrawer from "./addClientDrawer"
import { socket } from "../containers/Layout.4"

// const socket = openSocket("http://localhost:8080/",{transports:['websocket'],upgrade:false});
const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
    card: {
        minWidth: 275,
        width:700,
    },
    pos: {
        marginBottom: 12,
    },
  });

class WebsocketTest extends Component {
state = { 
        func1:null,
        func2:null,
        func1count:0,
        func2count:0,
        socket:false,
    }

componentDidMount = () => {
    var countF1 = 0
    var countF2 = 0
    socket.connect()
    socket.on("testconn-reply", res => {
        console.log(res);
        this.setState({socket:true})
    });
    socket.on("func1-reply", message => {
        countF1 += 1
        console.log(`${countF1}--> ${message}`);
        this.setState({func1:message, func1count:countF1, socket:true})
    });
    socket.on("func2-reply", res => {
        countF2 += 1
        console.log(`${countF2}--> ${res}`);
        this.setState({func2:res,func2count:countF2 , socket:true})
    });
    socket.on("closesoc-reply", res => {
        console.log(`Socket status--> ${res}`);
        this.setState({socket:false})
    });
};

componentWillUnmount=()=>{
    socket.removeAllListeners()
    socket.disconnect()
    socket.close()
}

emitSoc1 = () => {
    socket.emit("func1", "Func1 Called");
};

emitSoc2 = () => {
    socket.emit("func2", 20);
};

emitSocClose = () => {
    socket.emit("closesoc", 1);
};

render() { 
    const { classes } = this.props
    return ( 
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Button variant="contained" onClick={this.emitSoc1} color="primary" className={classes.button}>
                            Func1
                        </Button>
                        <Button variant="contained" onClick={this.emitSoc2} color="secondary" className={classes.button}>
                            Func2
                        </Button>
                        <Button variant="contained" onClick={this.emitSocClose} color="primary" className={classes.button}>
                            Close
                        </Button>
                        <div style={{padding:"0px 20px 0px 20px",display:"inline"}}>{`${this.state.func1count}-->${this.state.func1}`}</div>
                        <div style={{padding:"0px 20px 0px 20px",display:"inline"}}>{`${this.state.func2count}-->${this.state.func2}`}</div>
                        <div style={{padding:"0px 20px 0px 20px",display:"inline"}}>{`Socket-->${this.state.socket ? "On" : "Off"}`}</div>
                        <TemporaryDrawer />
                    </CardContent>
                </Card>
            </div>
        );
    }
}
WebsocketTest.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(WebsocketTest);
