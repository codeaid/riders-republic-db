import { CategoryType } from 'types/categories';

export interface GearCategoryTabsProps<TCategoryType extends CategoryType> {
  category: TCategoryType;
}
