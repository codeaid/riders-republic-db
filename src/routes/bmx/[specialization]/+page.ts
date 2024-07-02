import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { createSpecializationPageMeta } from '$lib/app';
import { bmxCategory } from '@/config/categories';

export const entries = () =>
  bmxCategory.specializations.map(({ slug }) => ({ specialization: slug }));

export const load: PageLoad = ({ params }) => {
  const specialization = bmxCategory.specializations.find(s => s.slug === params.specialization);

  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  return {
    category: bmxCategory,
    pageMetaTags: createSpecializationPageMeta(specialization),
    specialization,
  };
};
