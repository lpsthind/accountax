import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Scrollbars } from "react-custom-scrollbars";
import { MDBBtn, MDBIcon } from "mdbreact";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class ScrollTest extends React.Component {
    state = {  }
    
    render() { 
        const { classes } = this.props;
        return ( 
            // <div className={classes.root}>
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                       <Scrollbars 
                          style={{height:"calc(100vh - 130px)", width:"auto"}}
                          autoHide
                        > 
                          <MDBBtn color="primary">Primary</MDBBtn>
                          <MDBBtn>Default</MDBBtn>
                          <MDBBtn size="sm" color="secondary">Secondary</MDBBtn>
                          <MDBBtn size="sm" color="success">Success</MDBBtn>
                          <MDBBtn size="sm" color="info">Info</MDBBtn>
                          <MDBBtn size="sm" color="warning">Warning</MDBBtn>
                          <MDBBtn size="sm" color="danger">Danger</MDBBtn>

                          <MDBBtn size="sm" color="elegant">Elegant</MDBBtn>
                          <MDBBtn size="sm" color="unique">Unique</MDBBtn>
                          <MDBBtn size="sm" color="pink">Pink</MDBBtn>
                          <MDBBtn size="sm" color="purple">Purple</MDBBtn>
                          <MDBBtn size="sm" color="deep-purple">Deep-purple</MDBBtn>
                          <MDBBtn size="sm" color="indigo">Indigo</MDBBtn>
                          <MDBBtn size="sm" color="light-blue">Light blue</MDBBtn>
                          <MDBBtn size="sm" color="cyan">Cyan</MDBBtn>
                          <MDBBtn size="sm" color="dark-green">Dark-green</MDBBtn>
                          <MDBBtn size="sm" color="light-green">Light-green</MDBBtn>
                          <MDBBtn size="sm" color="yellow">Yellow</MDBBtn>
                          <MDBBtn size="sm" color="amber">Amber</MDBBtn>
                          <MDBBtn size="sm" color="deep-orange">Deep-orange</MDBBtn>
                          <MDBBtn size="sm" color="brown">Brown</MDBBtn>
                          <MDBBtn size="sm" color="blue-grey">Blue-grey</MDBBtn>
                          <MDBBtn size="sm" color="mdb-color">MDB</MDBBtn>

                          <MDBBtn gradient="peach">Peach</MDBBtn>
                          <MDBBtn gradient="purple">Purple</MDBBtn>
                          <MDBBtn gradient="blue">Blue</MDBBtn>
                          <MDBBtn gradient="aqua">Aqua</MDBBtn>

                          <MDBBtn color="primary" rounded>Primary</MDBBtn>
                          <MDBBtn rounded>Default</MDBBtn>
                          <MDBBtn rounded color="secondary">Secondary</MDBBtn>
                          <MDBBtn rounded color="success">Success</MDBBtn>
                          <MDBBtn rounded color="info">Info</MDBBtn>
                          <MDBBtn rounded color="warning">Warning</MDBBtn>
                          <MDBBtn rounded color="danger">Danger</MDBBtn>

                          <MDBBtn tag="a" size="xl" floating gradient="purple">
                            <MDBIcon icon="bolt" size="lg"/>
                          </MDBBtn>
                          <MDBBtn tag="a" floating gradient="peach">
                            <MDBIcon icon="leaf" />
                          </MDBBtn>
                          <MDBBtn tag="a" size="xl" floating gradient="blue">
                            <MDBIcon icon="star" size="xl" />
                          </MDBBtn>
                          {[...Array(1000)].map((_,i)=><span key={i*125}>This is Line number {i}out of 50</span>)}
                        </Scrollbars>
                      </Paper>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
ScrollTest.propTypes = {
    classes: PropTypes.object.isRequired,
};  
export default withStyles(styles)(ScrollTest);
  
