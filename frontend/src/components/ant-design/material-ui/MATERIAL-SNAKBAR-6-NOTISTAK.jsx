import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, withSnackbar } from 'notistack';

class App extends React.Component {
  handleClick = () => {
    this.props.enqueueSnackbar('I love snacks.');
  };

  handleClickVariant = variant => () => {
    // variant could be success, error, warning or info
    this.props.enqueueSnackbar('This is a warning message!', 
      { variant:variant ,
        anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
        },
        preventDuplicate: true,
        persist: false,
        // autoHideDuration: 1000,

      });
  };

  handleClickVariantCustom  = () => {
    this.props.enqueueSnackbar(null, {
    persist: true,
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
    },
    children: (key) => (
        <div id={key} style={{height:"40px",width:"auto",background:"lightblue",border:"0.5px solid red"}}>Hi this is Custom element.</div>
    ),
});
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>Show snackbar</Button>
        <Button onClick={this.handleClickVariant('success')}>Show sucess snackbar</Button>
        <Button onClick={this.handleClickVariant('warning')}>Show warning snackbar</Button>
        <Button onClick={this.handleClickVariant('error')}>Show error snackbar</Button>
        <Button onClick={this.handleClickVariant('info')}>Show info snackbar</Button>
        <Button onClick={this.handleClickVariantCustom}> Show Custom Child snackbar</Button>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
};

const MyApp = withSnackbar(App);

function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}

export default IntegrationNotistack;
