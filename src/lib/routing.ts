import type { GetStaticPathsItem, GetStaticPathsResult } from 'astro';
import type {
  AnyCategoryEntity,
  Category,
  CategoryEntity,
  DisciplineEntity,
  SpecializationEntity,
} from 'types/core';

const getPath = (parts: string[]) => '/' + parts.join('/');

const isRootCategory = (
  entity: AnyCategoryEntity,
): entity is CategoryEntity<'air' | 'bmx'> =>
  entity.category === 'air' || entity.category === 'bmx';

const createSpecializationPath = (
  specialization: SpecializationEntity,
  category: CategoryEntity<Category, any>,
  discipline?: DisciplineEntity,
): GetStaticPathsItem => ({
  params: {
    path: getPath(
      [category.slug]
        .concat(discipline?.slug ?? [])
        .concat(specialization.slug),
    ),
  },
  props: {
    category,
    discipline,
    specialization,
  },
});

const createDisciplinePaths = (
  discipline: DisciplineEntity,
  category: CategoryEntity<Category, any>,
  shallow = false,
): GetStaticPathsItem[] => {
  const parent: GetStaticPathsItem = {
    params: {
      path: getPath([category.slug, discipline.slug]),
    },
    props: {
      category,
      discipline,
    },
  };

  const children = discipline.specializations.map(specialization =>
    createSpecializationPath(specialization, category, discipline),
  );

  return shallow ? [parent] : [parent, ...children];
};

export const getStaticRouterPaths = (
  category: AnyCategoryEntity,
  shallow = false,
): GetStaticPathsResult => {
  const isRoot = isRootCategory(category);
  const parent: GetStaticPathsItem = {
    params: {
      path: getPath([category.slug]),
    },
    props: {
      category,
    },
  };

  const children = isRootCategory(category)
    ? category.specializations.map(specialization =>
        createSpecializationPath(specialization, category),
      )
    : category.disciplines
        .map(discipline => createDisciplinePaths(discipline, category, shallow))
        .flat();

  if (shallow) {
    return isRoot ? [parent] : children;
  }

  return [parent, ...children];
};
