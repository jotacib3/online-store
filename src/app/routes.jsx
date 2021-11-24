import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import MainLayout from './layouts/main-layout';
import DashboardLayout from './layouts/dashboard-layout';
import HomePage from './views/pages/HomePage';
import NotFoundPage from './views/pages/NotFoundPage';
import ProtectedOutlet from './components/Route/protected-outlet';

const DashboardPage = lazy(() =>
  import('./views/dashboard/dashboard-default-content'),
);
const DashboardDepartmentPage = lazy(() =>
  import('./views/dashboard/department/DepartmentListView'),
);
const DashboardCategoryPage = lazy(() =>
  import('./views/dashboard/category/CategoryListView'),
);
const DashboardProductPage = lazy(() =>
  import('./views/dashboard/product/ProductListView'),
);
const AboutPage = lazy(() => import('./views/pages/AboutPage'));
const AuthPage = lazy(() => import('./views/pages/auth/AuthPage'));

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
        <Route
          path={'/login'}
          element={
            <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
              <AuthPage />
            </Suspense>
          }
          exact
        />
        <Route path="/dashboard" element={<ProtectedOutlet />}>
          <Route
            path="/dashboard"
            element={
              <Suspense
                fallback={<LinearProgress style={{ margin: '10rem' }} />}
              >
                <DashboardLayout>
                  <DashboardPage />
                </DashboardLayout>
              </Suspense>
            }
            exact
          />
          <Route
            path={'/dashboard/departments'}
            element={
              <Suspense
                fallback={<LinearProgress style={{ margin: '10rem' }} />}
              >
                <DashboardLayout>
                  <DashboardDepartmentPage />
                </DashboardLayout>
              </Suspense>
            }
            exact
          />
          <Route
            path={'/dashboard/categories'}
            element={
              <Suspense
                fallback={<LinearProgress style={{ margin: '10rem' }} />}
              >
                <DashboardLayout>
                  <DashboardCategoryPage />
                </DashboardLayout>
              </Suspense>
            }
            exact
          />
          <Route
            path={'/dashboard/products'}
            element={
              <Suspense
                fallback={<LinearProgress style={{ margin: '10rem' }} />}
              >
                <DashboardLayout>
                  <DashboardProductPage />
                </DashboardLayout>
              </Suspense>
            }
            exact
          />
        </Route>
        {/*eager loading*/}
        <Route path="*" element={<NotFoundPage />} exact />
      </Route>
    </Routes>
  );
};
