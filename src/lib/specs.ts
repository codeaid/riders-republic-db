import { CategoryType } from 'types/categories';
import { GearSpec } from 'types/specs';

/**
 * Get list of specializations belonging to the specified category
 *
 * @param {Array<GearSpec>} specList Source specializations
 * @param {CategoryType} category Target category
 */
export const getCategorySpecs = (
  specList: Array<GearSpec>,
  category?: CategoryType,
) => specList.filter(spec => spec.category === category);
