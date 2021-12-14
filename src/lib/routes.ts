import { CategoryType, GearCategory } from 'types/categories';

/**
 * Get URL path of the specified category
 *
 * @param {Array<GearCategory>} categories Source categories
 * @param {CategoryType} categoryType Target category type
 */
export const getCategoryPath = (
  categories: Array<GearCategory>,
  categoryType: CategoryType,
) => categories.find(category => category.type === categoryType)?.path ?? '/';
