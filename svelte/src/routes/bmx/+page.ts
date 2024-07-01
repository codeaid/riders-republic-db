import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { bmxCategory } from '@/config/categories';

export const load: PageLoad = () => {
  const [specialization] = bmxCategory.specializations;
  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  redirect(302, `/${bmxCategory.id}/${specialization.slug}`);
};
