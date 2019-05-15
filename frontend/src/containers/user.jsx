import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Scrollbars } from "react-custom-scrollbars";


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

class UserDetails extends React.Component {
    state = {  }
    
    render() { 
        const { classes } = this.props;
        return ( 
            <div className={classes.root}>
                <Grid container spacing={24}  >
                    <Grid container item xs={3}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                          <Scrollbars autoHide style={{ height: "calc(100vh - 135px)", width: "auto" }}> 
                            <ul>
                              {[...Array(1001)].map((_,i)=>(<li key={`arraykey${i}`}>List Item {i}</li>))}                          
                            </ul>
                          </Scrollbars>
                        </Paper>
                      </Grid>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
UserDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};  
export default withStyles(styles)(UserDetails);
  
