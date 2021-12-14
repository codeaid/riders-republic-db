import { VoidFunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { GearCategoryMenu, Sidebar, Toolbar } from 'components';
import { useGearCategories } from 'hooks';
import {
  AppContent,
  AppToolbarLogo,
  AppToolbarTitle,
  StyledApp,
} from './App.styled';

export const App: VoidFunctionComponent = () => {
  // Retrieve all available categories
  const categories = useGearCategories();

  return (
    <StyledApp>
      <Toolbar>
        <Link to="/">
          <AppToolbarLogo />
        </Link>
        <AppToolbarTitle>Riders Republic - Elite Gear Database</AppToolbarTitle>
      </Toolbar>

      <Sidebar>
        <GearCategoryMenu categories={categories} />
      </Sidebar>

      <AppContent>...</AppContent>
    </StyledApp>
  );
};
