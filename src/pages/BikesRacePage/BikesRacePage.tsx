import { VoidFunctionComponent } from 'react';
import { GearCategoryTabs } from 'components';
import { CategoryType } from 'types/categories';

export const BikesRacePage: VoidFunctionComponent = () => (
  <GearCategoryTabs category={CategoryType.BikeRace} />
);
