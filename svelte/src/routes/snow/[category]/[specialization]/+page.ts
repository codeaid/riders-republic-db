import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { snowCategory } from '@/config/categories';

export const load: PageLoad = ({ params }) => {
  const category = snowCategory.categories.find(c => c.slug === params.category);
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
    parent: snowCategory,
    specialization,
  };
};
