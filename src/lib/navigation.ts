import type { GetStaticPathsResult } from 'astro';
import { allGear } from 'config/gear';
import { getStaticRouterPaths } from 'lib/routing';
import type { CategoryEntity, DisciplineEntity } from 'types/core';
import type { GearCategoryMenuEntry } from 'types/routing';

export const getCategoryMenuEntries = () => {
  const items = allGear.reduce<GetStaticPathsResult>(
    (acc, category) => acc.concat(getStaticRouterPaths(category, true)),
    [],
  );

  return items.map<GearCategoryMenuEntry>(item => ({
    path: item.params.path as string,
    category: item.props?.category as CategoryEntity,
    discipline: item.props?.discipline as DisciplineEntity | undefined,
  }));
};
