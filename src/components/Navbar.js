import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from '../assets/lenovo.png'
import { AddShoppingCart } from '@material-ui/icons';
import NavbarImg from './NavbarImg';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    padding: '10px',
    fontSize: '10px',
    color: 'black'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    
    marginRight: theme.spacing(2),
    marginLeft: 0,
    color: 'black',
    border: '1px solid black',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    color: 'gray',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  image:{
      marginRight: '10px',
      height: '2rem',
  },
  appBar:{
      backgroundColor: 'white'
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton>
            <img src={logo} className={classes.image}/> 
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            PRODUCTS
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            DEALS
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            SOLUTIONS
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            SUPPORT
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           <IconButton  color="inherit">
                <AddShoppingCart/>
            </IconButton>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton>
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
       <NavbarImg/>
      </AppBar>
    </div>
  );
}
