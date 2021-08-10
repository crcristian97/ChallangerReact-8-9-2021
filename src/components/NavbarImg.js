import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    padding: '1px',
    backgroundColor: '#053756'
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'left',
    fontSize: '36px',
    margin: '40px'
  },
  subtitle:{
    fontSize: '16px',
    margin: '12px'
  }
}));

export default function NavbarImg() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h5" >
            Labor Day  Sale 
            <div className={classes.subtitle}>
            Big Savings on select products
            </div>
          </Typography>          
        </Toolbar>
      </AppBar>
    </div>
  );
}
