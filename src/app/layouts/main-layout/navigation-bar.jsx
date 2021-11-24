import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import HeaderProfile from '../../components/header-profile';

import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  colors,
  Typography,
  IconButton,
} from '@material-ui/core';

export default function NavigationBar() {
  const classes = useStyles();
  const { claims } = useSelector(state => state.auth);
  const mobileDevice = useMediaQuery('(max-width:650px)');

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {!mobileDevice && (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <Link className={classes.link} to={'/'}>
                  <MenuIcon />
                </Link>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Online Store
              </Typography>
            </>
          )}
          <Button className={classes.menuButton} color="inherit">
            <Link className={classes.link} to={'/'}>
              Home
            </Link>
          </Button>
          <Button className={classes.menuButton} color="inherit">
            <Link className={classes.link} to={'/about'}>
              About
            </Link>
          </Button>
          {claims ? (
            <>
              <Button className={classes.menuButton} color="inherit">
                <Link className={classes.link} to={'/dashboard'}>
                  Dashboard
                </Link>
              </Button>
              <HeaderProfile />
            </>
          ) : (
            <Button className={classes.menuButton} color="inherit">
              <Link className={classes.link} to={'/login'}>
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: colors.lightBlue[50],
      textDecoration: 'none',
    },
  }),
);
