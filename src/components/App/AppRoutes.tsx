import { Suspense, VoidFunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoadingOverlay } from 'components';
import { useGearCategories } from 'hooks';
import { getCategoryPath } from 'lib/routes';
import AirPage from 'pages/AirPage';
import BikesRacePage from 'pages/BikesRacePage';
import BikesTricksPage from 'pages/BikesTricksPage';
import BmxPage from 'pages/BmxPage';
import PlaceholderPage from 'pages/PlaceholderPage';
import SnowRacePage from 'pages/SnowRacePage';
import SnowTricksPage from 'pages/SnowTricksPage';
import { CategoryType } from 'types/categories';

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
          component={BmxPage}
          path={getCategoryPath(categories, CategoryType.Bmx)}
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
