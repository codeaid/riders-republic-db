import type { SpecializationEntity } from '@/types/specializations';

type BaseCategoryEntity<TCategoryType extends string> = {
  id: TCategoryType;
  name: string;
  slug: string;
};

// Base gear category entity type
export type CategoryEntity<
  TCategoryType extends string,
  TSpecializationEntities extends SpecializationEntity<any, any>[],
> = BaseCategoryEntity<TCategoryType> & {
  colorClass: string;
  iconClass: string;
  specializations: TSpecializationEntities;
};

// Gear category entity type that contains nested categories
export type MultiCategoryEntity<
  TCategoryType extends string,
  TChildCategoryEntities extends CategoryEntity<any, any>[],
> = BaseCategoryEntity<TCategoryType> & {
  categories: TChildCategoryEntities;
};
