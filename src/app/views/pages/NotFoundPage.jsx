import React from 'react';
import { Box, Container, Typography, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Page from '../../components/page';

const NotFoundPage = () => {
  const mobileDevice = useMediaQuery('(max-width:650px)');

  return (
    <Page title="Not Found Page">
      <Container>
        <Box
          height={mobileDevice ? '50vh' : '100vh'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography variant={mobileDevice ? 'h4' : 'h1'}>
            404 Page Not Found ☹️
          </Typography>
          <Link to="/">Go to the home page</Link>
        </Box>
      </Container>
    </Page>
  );
};

export default NotFoundPage;
