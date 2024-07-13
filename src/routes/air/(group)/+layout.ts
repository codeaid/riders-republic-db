import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { createSpecializationPageMeta } from '$lib/app';
import { airCategory } from '@/config/categories';

export const load: LayoutLoad = ({ url }) => {
  const id = url.pathname.split('/').pop();

  // Retrieve specialization whose gear items to render
  const specialization = airCategory.specializations.find(s => s.slug === id);
  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  return {
    category: airCategory,
    pageMetaTags: createSpecializationPageMeta(specialization),
    specialization,
  };
};
