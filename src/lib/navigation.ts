import {
  airCategory,
  bikeCategory,
  bmxCategory,
  skateboardCategory,
  snowCategory,
} from '@/config/categories';
import type { MultiCategory, SingleCategory } from '@/types/categories';
import type { NavigationEntry } from '@/types/navigation';

/**
 * Generate category URL from a list of slugs
 *
 * @param slugs List of slugs to use when generating the URL
 */
const getCategoryUrl = (...slugs: string[]) => '/' + slugs.join('/');

/**
 * Get list of navigation entries for a single category
 *
 * @param category Source category
 */
const getSingleCategoryNavigationEntries = (category: SingleCategory) => ({
  colorClass: category.colorClass,
  iconClass: category.iconClass,
  name: category.name,
  path: getCategoryUrl(category.slug),
});

/**
 * Get list of navigation entries for a multi-category
 *
 * @param category Source category
 */
const getMultiCategoryNavigationEntries = (category: MultiCategory) =>
  category.categories.map<NavigationEntry>(subcategory => ({
    colorClass: subcategory.colorClass,
    iconClass: subcategory.iconClass,
    name: `${category.name} (${subcategory.name})`,
    path: getCategoryUrl(category.slug, subcategory.slug),
  }));

/**
 * Build a list of navigation entries from all available categories
 */
export const getNavigationEntries = (): NavigationEntry[] =>
  [
    getSingleCategoryNavigationEntries(airCategory),
    ...getMultiCategoryNavigationEntries(bikeCategory),
    getSingleCategoryNavigationEntries(bmxCategory),
    getSingleCategoryNavigationEntries(skateboardCategory),
    ...getMultiCategoryNavigationEntries(snowCategory),
  ].sort((a, b) => a.name.localeCompare(b.name));
