import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { bmxCategory } from '@/config/categories';

export const load: PageLoad = ({ params }) => {
  const specialization = bmxCategory.specializations.find(s => s.slug === params.specialization);

  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  return { category: bmxCategory, specialization };
};
