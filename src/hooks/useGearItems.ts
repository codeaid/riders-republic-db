import { orderBy } from 'lodash';
import { useContext, useMemo } from 'react';
import { GearItemContext } from 'components';
import { getBrandName } from 'lib/brands';
import { GearSpecItem } from 'types/gear';
import { SpecType } from 'types/specs';

/**
 * Get all gear items belonging to the specified specialization and sort them
 *
 * @param {SpecType} spec Target specialization
 */
export const useGearItems = <TSpecType extends SpecType>(spec: TSpecType) => {
  // Retrieve all available gear
  const gear = useContext(GearItemContext);

  // Find gear items
  const items = useMemo(
    () => gear.filter(item => item.spec === spec),
    [gear, spec],
  );

  // Sort gear items by score, brand name and model
  return useMemo(
    () =>
      orderBy(
        items,
        [g => g.score, g => getBrandName(g.brand), g => g.model],
        ['desc', 'asc', 'asc'],
      ) as Array<GearSpecItem<TSpecType>>,
    [items],
  );
};
