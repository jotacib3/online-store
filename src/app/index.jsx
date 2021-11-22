/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../styles/global-styles';
import { AppRoutes } from './routes';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Online Store" defaultTitle="Online Store">
        <meta name="description" content="A Online Store application" />
      </Helmet>
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
