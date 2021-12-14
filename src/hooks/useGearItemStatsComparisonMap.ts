import { useMemo } from 'react';
import { getGearItemStatsComparisonMap } from 'lib/gear';
import { SpecType } from 'types/specs';
import { useGearItems } from './useGearItems';

/**
 * Build a gear stats comparison map for all items in the specified
 * specialization
 *
 * @param {SpecType} spec Target specialization
 */
export const useGearItemStatsComparisonMap = <TSpecType extends SpecType>(
  spec: TSpecType,
) => {
  // Retrieve gear items associated with the specified specialization
  const gear = useGearItems(spec);

  return useMemo(() => getGearItemStatsComparisonMap(gear), [gear]);
};
