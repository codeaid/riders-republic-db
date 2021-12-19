import { sortBy, sortedUniq } from 'lodash';
import sha1 from 'sha1';
import { CategoryType } from 'types/categories';
import {
  BikeGearItem,
  GearItem,
  RocketwingGearItem,
  SnowGearItem,
  WingsuitGearItem,
} from 'types/gear';
import { GearCategoryItem, GearSpecItem, GearSpecStats } from 'types/mapping';
import {
  AirSpecType,
  BikeRaceSpecType,
  BikeTricksSpecType,
  SnowRaceSpecType,
  SnowTricksSpecType,
  SpecType,
} from 'types/specs';
import {
  GearItemStatsComparison,
  GearItemStatsComparisonMap,
} from 'types/stats';

/**
 * Get gear items belonging to the specified category
 *
 * @param {Array<GearItem>} gear Source gear items
 * @param {CategoryType} category Target category type
 */
export const getGearCategoryItems = <TCategoryType extends CategoryType>(
  gear: Array<GearItem>,
  category: TCategoryType,
) =>
  gear.filter(item => item.category === category) as Array<
    GearCategoryItem<TCategoryType>
  >;

/**
 * Get gear items belonging to the specified specialization
 *
 * @param {Array<GearItem>} gear Source gear items
 * @param {SpecType} spec Target specialization
 */
export const getGearSpecItems = <TSpecType extends SpecType>(
  gear: Array<GearItem>,
  spec: TSpecType,
) => gear.filter(item => item.spec === spec) as Array<GearSpecItem<TSpecType>>;

/**
 * Build a gear stats comparison map for all items in the specified
 * specialization
 *
 * @param {Array<GearItem>} items Source gear items
 */
export const getGearItemComparisonMap = <TSpecType extends SpecType>(
  items: Array<GearSpecItem<TSpecType>>,
) => {
  // Build a map of stats and a list of all their available values
  const valueMap = items
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
  const orderedMap = [...valueMap].map(([stat, values]) => {
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
 * Generate a unique hash for the specified gear item
 *
 * @param {GearItem} item Target gear item
 */
export const getGearItemHash = (item: GearItem) => {
  const parts = [item.category, item.spec, item.brand, item.model];
  const result = sha1(parts.join(':'));

  return result.substr(0, 8);
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
