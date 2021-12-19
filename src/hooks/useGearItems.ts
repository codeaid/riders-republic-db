import { orderBy } from 'lodash';
import { useContext, useMemo } from 'react';
import { GearItemContext } from 'components';
import { getBrandName } from 'lib/brands';

/**
 * Get all gear items sorted by category, spec, score (desc), brand and model
 */
export const useGearItems = () => {
  // Retrieve all available gear
  const gear = useContext(GearItemContext);

  return useMemo(
    () =>
      orderBy(
        gear,
        [
          g => g.category,
          g => g.spec,
          g => g.score,
          g => getBrandName(g.brand),
          g => g.model,
        ],
        ['asc', 'asc', 'desc', 'asc', 'asc'],
      ),
    [gear],
  );
};
