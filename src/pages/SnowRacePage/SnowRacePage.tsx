import { VoidFunctionComponent } from 'react';
import { GearCategoryTabs } from 'components';
import { CategoryType } from 'types/categories';

export const SnowRacePage: VoidFunctionComponent = () => (
  <GearCategoryTabs category={CategoryType.SnowRace} />
);
