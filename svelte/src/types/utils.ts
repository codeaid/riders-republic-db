import type { CategoryEntity, MultiCategoryEntity } from '@/types/categories';
import type { SpecializationEntity } from '@/types/specializations';

// Narrow a type down to only those subtypes that extend U
export type FilterExtends<T, U> = T extends U ? T : never;

// Extract a union of all identifiers from the specified type T
export type GetEntityIds<T extends { id: string }> = T extends { id: infer U } ? U : never;

// Extract a union of all specialization entity types embedded in the specified category
export type GetCategorySpecializations<
  TCategoryEntity extends
    | CategoryEntity<any, SpecializationEntity<any, any>[]>
    | MultiCategoryEntity<any, CategoryEntity<any, any>[]>,
> =
  TCategoryEntity extends CategoryEntity<any, SpecializationEntity<any, any>[]>
    ? TCategoryEntity['specializations'][number]
    : TCategoryEntity extends MultiCategoryEntity<any, CategoryEntity<any, any>[]>
      ? TCategoryEntity['categories'][number]['specializations'][number]
      : never;
