import { lazy, Suspense, VoidFunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoadingOverlay } from 'components';
import { useGearCategories } from 'hooks';
import { getCategoryPath } from 'lib/routes';
import { CategoryType } from 'types/categories';

// Import page components using code splitting
const AirPage = lazy(() => import('pages/AirPage'));
const BikesRacePage = lazy(() => import('pages/BikesRacePage'));
const PlaceholderPage = lazy(() => import('pages/PlaceholderPage'));

export const AppRoutes: VoidFunctionComponent = () => {
  // Retrieve available gear categories
  const categories = useGearCategories();

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <Switch>
        <Route
          component={AirPage}
          path={getCategoryPath(categories, CategoryType.Air)}
        />
        <Route
          component={BikesRacePage}
          path={getCategoryPath(categories, CategoryType.BikeRace)}
        />
        <Route component={PlaceholderPage} />
      </Switch>
    </Suspense>
  );
};
