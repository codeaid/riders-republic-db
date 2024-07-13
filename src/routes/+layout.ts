import type { LayoutLoad } from './$types';
import { createBasePageMeta } from '$lib/app';
import { getNavigationEntries } from '$lib/navigation';

export const load: LayoutLoad = ({ url }) => {
  const navigationEntries = getNavigationEntries();

  return { baseMetaTags: createBasePageMeta(url), navigationEntries };
};

export const ssr = false;
