import { VoidFunctionComponent } from 'react';
import { GearCategoryTabs } from 'components';
import { CategoryType } from 'types/categories';

export const BmxPage: VoidFunctionComponent = () => (
  <GearCategoryTabs category={CategoryType.Bmx} />
);
