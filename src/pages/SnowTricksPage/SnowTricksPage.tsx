import { VoidFunctionComponent } from 'react';
import { GearCategoryTabs } from 'components';
import { CategoryType } from 'types/categories';

export const SnowTricksPage: VoidFunctionComponent = () => (
  <GearCategoryTabs category={CategoryType.SnowTricks} />
);
