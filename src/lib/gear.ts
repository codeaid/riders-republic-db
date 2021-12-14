import { orderBy, sortBy, sortedUniq } from 'lodash';
import { getBrandName } from 'lib/brands';
import {
  BikeGearItem,
  GearItem,
  GearItemStatsComparison,
  GearItemStatsComparisonMap,
  GearSpecItem,
  GearSpecStats,
  RocketwingGearItem,
  SnowGearItem,
  WingsuitGearItem,
} from 'types/gear';
import {
  AirSpecType,
  BikeRaceSpecType,
  BikeTricksSpecType,
  SnowRaceSpecType,
  SnowTricksSpecType,
  SpecType,
} from 'types/specs';

/**
 * Build a map of gear stats and their associated comparisons within the
 * specified specialization
 *
 * @param {Array<GearItem>} items Target items to build the map for
 */
export const getGearItemStatsComparisonMap = <TSpecType extends SpecType>(
  items: Array<GearSpecItem<TSpecType>>,
) => {
  // Build a map of stats and a list of all their available values
  const map = items
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
    );

  // Iterate through the map of numbers and generate a comparison map for each
  const orderedMap = [...map].map(([stat, values]) => {
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
  });

  return Object.fromEntries(orderedMap) as GearItemStatsComparisonMap<
    GearSpecItem<TSpecType>
  >;
};

/**
 * Find gear items belonging to the specified specialization
 *
 * @param {Array<GearItem>} gear Source gear
 * @param {SpecType} spec Target specialization
 */
export const getGearSpecItems = <TSpecType extends SpecType>(
  gear: Array<GearItem>,
  spec: TSpecType,
) => {
  // Find gear items
  const items = gear.filter(item => item.spec === spec);

  // Sort gear items by score, brand name and model
  return orderBy(
    items,
    [g => g.score, g => getBrandName(g.brand), g => g.model],
    ['desc', 'asc', 'asc'],
  ) as Array<GearSpecItem<TSpecType>>;
};

/**
 * Determine if the specified gear item is a bike gear item
 *
 * @param {GearItem} gear Gear item to validate
 */
export const isBikeGearItem = (gear: GearItem): gear is BikeGearItem =>
  (
    [
      BikeRaceSpecType.Downhill,
      BikeRaceSpecType.Road,
      BikeTricksSpecType.Freeride,
      BikeTricksSpecType.Slopestyle,
    ] as Array<SpecType>
  ).includes(gear.spec);

/**
 * Determine if the specified gear item is a rocketwing item
 *
 * @param {GearItem} gear Gear item to validate
 */
export const isRocketwingGearItem = (
  gear: GearItem,
): gear is RocketwingGearItem => gear.spec === AirSpecType.Rocketwing;

/**
 * Determine if the specified gear item is a snow gear item
 *
 * @param {GearItem} gear Gear item to validate
 */
export const isSnowGearItem = (gear: GearItem): gear is SnowGearItem =>
  (
    [
      SnowRaceSpecType.DeepSnow,
      SnowRaceSpecType.Downhill,
      SnowTricksSpecType.OffTrack,
      SnowTricksSpecType.Snowpark,
    ] as Array<SpecType>
  ).includes(gear.spec);

/**
 * Determine if the specified gear item is a wingsuit item
 *
 * @param {GearItem} gear Gear item to validate
 */
export const isWingsuitGearItem = (gear: GearItem): gear is WingsuitGearItem =>
  gear.spec === AirSpecType.Wingsuit;
