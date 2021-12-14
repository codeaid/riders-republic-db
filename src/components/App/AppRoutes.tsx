import { lazy, Suspense, VoidFunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoadingOverlay } from 'components';
import { useGearCategories } from 'hooks';
import { getCategoryPath } from 'lib/routes';
import { CategoryType } from 'types/categories';

// Import page components using code splitting
const AirPage = lazy(() => import('pages/AirPage'));
const BikesRacePage = lazy(() => import('pages/BikesRacePage'));
const BikesTricksPage = lazy(() => import('pages/BikesTricksPage'));
const PlaceholderPage = lazy(() => import('pages/PlaceholderPage'));
const SnowRacePage = lazy(() => import('pages/SnowRacePage'));
const SnowTricksPage = lazy(() => import('pages/SnowTricksPage'));

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
        <Route
          component={BikesTricksPage}
          path={getCategoryPath(categories, CategoryType.BikeTricks)}
        />
        <Route
          component={SnowRacePage}
          path={getCategoryPath(categories, CategoryType.SnowRace)}
        />
        <Route
          component={SnowTricksPage}
          path={getCategoryPath(categories, CategoryType.SnowTricks)}
        />
        <Route component={PlaceholderPage} />
      </Switch>
    </Suspense>
  );
};
