import { lazy, Suspense, VoidFunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoadingOverlay } from 'components';

// Import page components using code splitting
const PlaceholderPage = lazy(() => import('pages/PlaceholderPage'));

export const AppRoutes: VoidFunctionComponent = () => {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <Switch>
        <Route component={PlaceholderPage} />
      </Switch>
    </Suspense>
  );
};
