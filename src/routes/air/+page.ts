import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';
import { airCategory } from '@/config/categories';

// @ts-expect-error Workaround for Svelte not being able to build the route
export const entries = () => [{}];

export const load: PageLoad = () => {
  const [specialization] = airCategory.specializations;

  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  redirect(302, `${base}/${airCategory.slug}/${specialization.slug}`);
};
