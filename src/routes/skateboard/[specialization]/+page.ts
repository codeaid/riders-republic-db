import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { createSpecializationPageMeta } from '$lib/app';
import { skateboardCategory } from '@/config/categories';

export const entries = () =>
  skateboardCategory.specializations.map(({ slug }) => ({ specialization: slug }));

export const load: PageLoad = ({ params }) => {
  const specialization = skateboardCategory.specializations.find(
    s => s.slug === params.specialization,
  );

  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  return {
    category: skateboardCategory,
    pageMetaTags: createSpecializationPageMeta(specialization),
    specialization,
  };
};
