import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';
import { skateboardCategory } from '@/config/categories';

// @ts-expect-error Workaround for Svelte not being able to build the route
export const entries = () => [{}];

export const load: PageLoad = () => {
  const [specialization] = skateboardCategory.specializations;
  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  redirect(302, `${base}/${skateboardCategory.id}/${specialization.slug}`);
};
