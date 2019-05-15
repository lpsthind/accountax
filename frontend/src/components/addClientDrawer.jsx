import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./addClientDrawer.css"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import classNames from 'classnames';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },  
});


class TemporaryDrawer extends React.Component {
  state = {
    right: false,
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };


  render() {
    const { classes } = this.props;
    const drawerWidth = "150vh"
    const ranges = [
      {
        value: '0-20',
        label: '0 to 20',
      },
      {
        value: '21-50',
        label: '21 to 50',
      },
      {
        value: '51-100',
        label: '51 to 100',
      },
    ];

    return (
      <div>
        {/* <Button onClick={this.toggleDrawer('right', true)}>Open Drawer</Button> */}
        <Drawer anchor="right" open={this.props.addClientDrawer} onClose={this.props.addClientDrawerClose}>
          <div
            tabIndex={0}
            role="button"
          >
            <div style={{width:drawerWidth,height:"auto",WebkitAppRegion:"none"}}>
                <div style={{height:"50px",width:drawerWidth,padding:"10px 0px 0px 0px", border:"0.8px solid #eeeeee" }}>
                  <span 
                    style={{
                      fontSize:"25px",
                      margin:"20px 0px 0px 20px",
                    }}
                    >
                    Add Client
                  </span>
                  <button 
                    type="button"
                    style={{
                      backgroundColor:"transparent",
                      float:"right",
                      height:"40px",
                      width:"40px",
                      borderRadius:"50%",
                      border:"5px solid transparent",
                      padding:"2px 6px 15px 5px",
                      marginRight:"5px",
                      marginBottom:"15px",
                      outline:"none",
                      textJustify:"auto",
                      textAlign:"center",
                      cursor:"pointer",
                    }}
                    color="default" 
                    onClick={this.props.addClientDrawerClose} 
                    className={classes.Button}
                  >
                    <FontAwesomeIcon icon={faArrowCircleRight} className="cls-icon-addcl-drawer" style={{ fontSize: "1.8em" }}/>
                  </button>
                </div>

                <form className={classes.container} noValidate autoComplete="off">
                  <div style={{margin:"0px 0px 0px 30px"}}>
                    <Grid container spacing={24}>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                          <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          select
                          label="With Select"
                          className={classNames(classes.margin, classes.textField)}
                          value={this.state.weightRange}
                          onChange={this.handleChange('weightRange')}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                          }}
                        >
                          {ranges.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid item xs={3}>
                        <FormControl className={classNames(classes.margin, classes.textField)}>
                          <InputLabel htmlFor="adornment-password">Password</InputLabel>
                          <Input
                            id="adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="Toggle password visibility"
                                  onClick={this.handleClickShowPassword}
                                >
                                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </div>
                  
                  <div style={{
                          height:"60px",
                          width:drawerWidth,
                          border:"5px solid transparent",
                          padding:"0px 0px 0px 0px",
                          // backgroundColor:"yellow",
                          // marginTop:"calc(100vh - 172px)", 
                        }}>
                    <Button style={{float:"right"}} variant="contained" color="secondary" className={classes.button}>
                      Clear
                    </Button>
                    <Button style={{float:"right"}} variant="contained" color="primary" className={classes.button}>
                      Save
                    </Button>
                    
                  </div>
              </form>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
