import React from 'react';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: green,
  }
});

const GreenButton = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <Button variant="contained" color="primary" onClick={props.handleSubmit} fullWidth="true">
        <b>{props.buttonText}</b>
      </Button>
    </MuiThemeProvider>
  )
};

export default GreenButton;