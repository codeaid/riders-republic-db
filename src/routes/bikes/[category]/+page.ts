import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { base } from '$app/paths';
import { bikeCategory } from '@/config/categories';

export const entries = () => bikeCategory.categories.map(({ slug }) => ({ category: slug }));

export const load: PageLoad = ({ params }) => {
  const category = bikeCategory.categories.find(c => c.slug === params.category);
  if (!category) {
    return error(404, {
      message: 'Category not found',
    });
  }

  const [specialization] = category.specializations;
  if (!specialization) {
    return error(404, {
      message: 'Specialization not found',
    });
  }

  redirect(302, `${base}/${bikeCategory.slug}/${params.category}/${specialization.slug}`);
};
