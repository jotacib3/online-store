import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Container, Typography, useMediaQuery } from '@material-ui/core';

import Page from '../../components/page';

const DashboardDefaultContent = () => {
  const classes = useStyles();
  const mobileDevice = useMediaQuery('(max-width:650px)');

  return (
    <Page className={classes.root} title="Dashboard">
      <Container>
        <Box
          height={mobileDevice ? '50vh' : '100vh'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography variant={mobileDevice ? 'h4' : 'h1'}>
            Dashboard Page 🙋🏿
          </Typography>
        </Box>
      </Container>
    </Page>
  );
};

export default DashboardDefaultContent;

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100%',
  },
}));
