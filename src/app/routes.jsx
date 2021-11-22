import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import MainLayout from './layouts/main-layout';

import HomePage from './views/pages/HomePage';
import NotFoundPage from './views/pages/NotFoundPage';

const AboutPage = lazy(() => import('./views/pages/AboutPage'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/*eager loading*/}
        <Route index element={<HomePage />} />

        {/*lazy loadings*/}
        <Route
          path={'/about'}
          element={
            <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
              <AboutPage />
            </Suspense>
          }
          exact
        />

        {/*eager loading*/}
        <Route path="*" element={<NotFoundPage />} exact />
      </Route>
    </Routes>
  );
};
