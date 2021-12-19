import { VoidFunctionComponent } from 'react';
import { GearCategoryTabs } from 'components';
import { CategoryType } from 'types/categories';

export const BikesTricksPage: VoidFunctionComponent = () => (
  <GearCategoryTabs category={CategoryType.BikeTricks} />
);
