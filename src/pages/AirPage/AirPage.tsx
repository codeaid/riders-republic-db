import { VoidFunctionComponent } from 'react';
import { GearCategoryTabs } from 'components';
import { CategoryType } from 'types/categories';

export const AirPage: VoidFunctionComponent = () => (
  <GearCategoryTabs category={CategoryType.Air} />
);
