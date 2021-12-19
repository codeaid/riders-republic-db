import { useContext, useMemo } from 'react';
import { GearSpecContext } from 'components';
import { getCategorySpecs } from 'lib/specs';
import { CategoryType } from 'types/categories';

/**
 * Retrieve gear specializations belonging to the specified category
 *
 * @param {CategoryType} category Target category
 */
export const useGearSpecs = (category: CategoryType) => {
  // Retrieve all available specializations
  const specs = useContext(GearSpecContext);

  return useMemo(() => getCategorySpecs(specs, category), [category, specs]);
};
