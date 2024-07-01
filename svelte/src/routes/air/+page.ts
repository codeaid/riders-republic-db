import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { airCategory } from '@/config/categories';

export const load: PageLoad = () => {
  const [specialization] = airCategory.specializations;

  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  redirect(302, `/${airCategory.slug}/${specialization.slug}`);
};
