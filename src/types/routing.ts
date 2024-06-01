import type { CategoryEntity, DisciplineEntity } from 'types/core.ts';

export interface GearCategoryMenuEntry {
  path: string;
  category: CategoryEntity;
  discipline?: DisciplineEntity;
}
