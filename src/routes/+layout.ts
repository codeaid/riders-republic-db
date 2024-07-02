import type { LayoutLoad } from './$types';
import { getNavigationEntries } from '$lib/navigation';

export const load: LayoutLoad = () => {
  const navigationEntries = getNavigationEntries();

  return { navigationEntries };
};

export const ssr = false;
