import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from '../components';
import PageLoading from '../components/organisms/PageLoading';
import OpenRoutes from './OpenRoutes';

const MainRouter = (): JSX.Element => {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<PageLoading />}>
          <Routes>{OpenRoutes()}</Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default MainRouter;
