import { sortBy, sortedUniq } from 'lodash';
import { useMemo } from 'react';
import {
  GearItemStatsComparison,
  GearItemStatsComparisonMap,
  GearSpecItem,
  GearSpecStats,
} from 'types/gear';
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

  // Build a map of stats and a list of all their available values
  const valueMap = useMemo(
    () =>
      gear
        .map(item => item.stats)
        .reduce(
          (map, stats) =>
            Object.entries(stats).reduce((innerMap, [stat, value]) => {
              // Retrieve current stats values or default to an empty array
              const values =
                innerMap.get(stat as keyof GearSpecStats<TSpecType>) ?? [];

              // Append current stat value to the end of the list
              return innerMap.set(stat as keyof GearSpecStats<TSpecType>, [
                ...values,
                value,
              ]);
            }, map),
          new Map<keyof GearSpecStats<TSpecType>, Array<number>>(),
        ),
    [gear],
  );

  // Iterate through the map of numbers and generate a comparison map for each
  const orderedMap = useMemo(
    () =>
      [...valueMap].map(([stat, values]) => {
        // Sort values in an ascending order and remove duplicates
        const sorted = sortBy([...values]);
        const unique = sortedUniq(sorted).reverse();

        // Retrieve best and second best values from the array
        const [best = 0, second] = unique;

        // Calculate the lowest (worst) value
        const worst = unique.length ? Math.min(...unique) : 0;

        return [
          stat as keyof GearSpecStats<TSpecType>,
          {
            best,
            // Use best values as second best if array only contains one value
            second: second ?? best,
            worst,
          } as GearItemStatsComparison,
        ];
      }),
    [valueMap],
  );

  return useMemo<GearItemStatsComparisonMap<GearSpecItem<TSpecType>>>(
    () => Object.fromEntries(orderedMap),
    [orderedMap],
  );
};
