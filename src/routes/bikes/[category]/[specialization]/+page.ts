import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { createSpecializationPageMeta } from '$lib/app';
import { bikeCategory } from '@/config/categories';

export const entries = () =>
  bikeCategory.categories.reduce(
    (outer, category) => {
      const specs = category.specializations.map(
        specialization => ({
          category: category.slug,
          specialization: specialization.slug,
        }),
        [],
      );

      return outer.concat(specs);
    },
    [] as { category: string; specialization: string }[],
  );

export const load: PageLoad = ({ params }) => {
  const category = bikeCategory.categories.find(c => c.slug === params.category);
  if (!category) {
    return error(404, {
      message: 'Category not found',
    });
  }

  const specialization = category.specializations.find(s => s.slug === params.specialization);
  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  return {
    category,
    pageMetaTags: createSpecializationPageMeta(specialization),
    parent: bikeCategory,
    specialization,
  };
};
