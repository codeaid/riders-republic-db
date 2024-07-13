import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';
import { bmxCategory } from '@/config/categories';

// @ts-expect-error Workaround for Svelte not being able to build the route
export const entries = () => [{}];

export const load: PageLoad = () => {
  const [specialization] = bmxCategory.specializations;
  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  redirect(302, `${base}/${bmxCategory.id}/${specialization.slug}`);
};
