import React from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import DashboardSidebarNavigation from './dashboard-sidebar-navigation';
import clsx from 'clsx';

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const mobileDevice = useMediaQuery('(max-width:650px)');

  return (
    <Grid container direction="row" alignItems="flex-start">
      <DashboardSidebarNavigation />{' '}
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div
            className={clsx(classes.content, mobileDevice && classes.leftSpace)}
          >
            {children}
          </div>
        </div>
      </div>
    </Grid>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DashboardLayout;

const useStyles = makeStyles(theme => ({
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  leftSpace: {
    paddingLeft: '3rem',
  },
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
}));
