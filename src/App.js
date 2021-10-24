import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Grid } from '@material-ui/core';

import Dashboard from './views/dashboard';
import SideMenu from './components/SideMenu';
import Header from './components/Header'

const theme = createTheme({
  palette: {
    background: {
      default: '#f4f5fd'
    }
  },

  overrides:{ //overides css rules of specified component
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Grid container spacing={0}>
          <Grid item md={2} xl={2}>
            <SideMenu />
          </Grid>
          <Grid item xs={12} md={10} xl={10}>
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Redirect from="*" to="/" />
            </Switch>
          </Grid>
        </Grid>
        <CssBaseline /> {/* implements basic common css rules like box-sizing, body padding and margin = 0 etc*/}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
