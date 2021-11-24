import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Divider,
  ListSubheader,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import {
  PieChart as PieChartIcon,
  ShoppingCart as ShoppingCartIcon,
  ChevronUp as ChevronUpIcon,
  ChevronDown as ChevronDownIcon,
  Package as PackageIcon,
  User as UserIcon,
  DollarSign as DollarSignIcon,
  LogOut as LogOutIcon,
  Clipboard as ClipboardIcon,
} from 'react-feather';
import clsx from 'clsx';

import { getProfileAction } from '../../../store/profile/profileAsyncActions';

const DashboardSidebarNavigation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pathname = '/dashboard';
  const { profile } = useSelector(state => state.profile);
  const { claims } = useSelector(state => state.auth);
  const [open, setOpen] = useState(false);
  const mobileDevice = useMediaQuery('(max-width:650px)');

  useEffect(() => {
    dispatch(getProfileAction(claims.sub));
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className={classes.root}>
        <Drawer
          className={clsx(classes.drawer, mobileDevice && classes.drawerClose)}
          variant="permanent"
          classes={{
            paper: clsx(
              classes.drawerPaper,
              mobileDevice && classes.drawerClose,
            ),
          }}
          anchor="left"
        >
          {profile.name && !mobileDevice && (
            <Box p={2}>
              <Box display="flex" justifyContent="center">
                <Avatar
                  alt="User"
                  className={classes.avatar}
                  src={profile.avatar}
                />
              </Box>
              <Box mt={2} textAlign="center">
                <Typography>{profile.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Your tier: {profile.tier}
                </Typography>
              </Box>
            </Box>
          )}
          <Divider />
          {mobileDevice ? (
            <div className={classes.drawerContainer}>
              <List>
                <Link className={classes.link} to={`${pathname}`}>
                  <ListItem button>
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                  </ListItem>
                </Link>
                <Divider />
                <ListItem button onClick={handleClick}>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </ListItem>
                <Divider />
                <Link className={classes.link} to={`${pathname}/products`}>
                  <ListItem button>
                    <ListItemIcon>
                      <ShoppingCartIcon />
                    </ListItemIcon>
                  </ListItem>
                </Link>
                <Divider />
                <Link className={classes.link} to={`${pathname}/departments`}>
                  <ListItem button>
                    <ListItemIcon>
                      <PackageIcon />
                    </ListItemIcon>
                  </ListItem>
                </Link>
                <Divider />
                <Link className={classes.link} to={`${pathname}/categories`}>
                  <ListItem button>
                    <ListItemIcon>
                      <ClipboardIcon />
                    </ListItemIcon>
                  </ListItem>
                </Link>
                <Divider />
                <Link className={classes.link} to={`${pathname}/account`}>
                  <ListItem button>
                    <ListItemIcon>
                      <UserIcon />
                    </ListItemIcon>
                  </ListItem>
                </Link>
                <Divider />
                <Link className={classes.link} to={`/pricing`}>
                  <ListItem button>
                    <ListItemIcon>
                      <DollarSignIcon />
                    </ListItemIcon>
                  </ListItem>
                </Link>
                <Divider />
                <a className={classes.link} href={'/'}>
                  <ListItem button onClick={handleLogout}>
                    <ListItemIcon>
                      <LogOutIcon />
                    </ListItemIcon>
                  </ListItem>
                </a>
              </List>
              <Divider />
            </div>
          ) : (
            <div className={classes.drawerContainer}>
              <List>
                <ListSubheader>Reports</ListSubheader>
                <Link className={classes.link} to={`${pathname}`}>
                  <ListItem button>
                    <ListItemIcon>
                      <PieChartIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Dashboard'} />
                  </ListItem>
                </Link>

                <ListSubheader>Management</ListSubheader>
                <Link className={classes.link} to={`${pathname}/products`}>
                  <ListItem button>
                    <ListItemIcon>
                      <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Products'} />
                  </ListItem>
                </Link>
                <Link className={classes.link} to={`${pathname}/departments`}>
                  <ListItem button>
                    <ListItemIcon>
                      <PackageIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Departments'} />
                  </ListItem>
                </Link>
                <Link className={classes.link} to={`${pathname}/categories`}>
                  <ListItem button>
                    <ListItemIcon>
                      <ClipboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Categories'} />
                  </ListItem>
                </Link>
                <ListSubheader>Pages</ListSubheader>
                <Link className={classes.link} to={`${pathname}/account`}>
                  <ListItem button>
                    <ListItemIcon>
                      <UserIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Account'} />
                  </ListItem>
                </Link>
                <a className={classes.link} href={'/'}>
                  <ListItem button onClick={handleLogout}>
                    <ListItemIcon>
                      <LogOutIcon />
                    </ListItemIcon>
                    <ListItemText primary={'logout'} />
                  </ListItem>
                </a>
              </List>
            </div>
          )}
        </Drawer>
      </div>
    </>
  );
};

export default DashboardSidebarNavigation;

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    avatar: {
      cursor: 'pointer',
      width: 64,
      height: 64,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    drawerPaper: {
      width: drawerWidth,
    },
    link: { textDecoration: 'none', color: 'inherit' },
    logoWithLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,

    // mobile style
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
  }),
);
