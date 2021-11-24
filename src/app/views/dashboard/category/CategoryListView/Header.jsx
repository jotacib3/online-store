import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  SvgIcon,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Download as DownloadIcon, Upload as UploadIcon } from 'react-feather';

const Header = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      justifyContent="space-between"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/dashboard"
            component={RouterLink}
          >
            Dashboard
          </Link>
          <Typography variant="body1" color="inherit">
            List Categories
          </Typography>
        </Breadcrumbs>
        <Typography variant="h4" color="textPrimary">
          All Categories
        </Typography>
        <Box mt={2}>
          <Button
            className={classes.action}
            startIcon={
              <SvgIcon fontSize="small">
                <UploadIcon />
              </SvgIcon>
            }
          >
            Import
          </Button>
          <Button
            className={classes.action}
            startIcon={
              <SvgIcon fontSize="small">
                <DownloadIcon />
              </SvgIcon>
            }
          >
            Export
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

Header.prototype = {
  className: PropTypes.string,
};

const useStyles = makeStyles(theme => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}));

export default Header;
