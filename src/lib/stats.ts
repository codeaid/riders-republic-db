import { statNameMap } from '@/config/gear/stats';
import type { GearEntity } from '@/types/gear';
import type { GearStatInfoMap, GearStatRank, GearStatType } from '@/types/stats';

/**
 * Create a new stat info object containing the highest, second highest and lowest stat values
 *
 * @param highest Highest stat value of the list of gear items
 * @param secondHighest Second highest stat value of the list of gear items
 * @param lowest Lowest stat value of the list of gear items
 */
const createGearStatInfo = (
  highest: number,
  secondHighest: number,
  lowest: number,
): GearStatRank => ({
  highest,
  secondHighest,
  lowest,
});

/**
 * Create a list of all possible gear stat values for the specified list of gear
 *
 * @param gear Source gear list
 * @param type Target stat type to process
 */
const getGearStatValues = <
  TGearStatType extends GearStatType,
  TGearEntity extends GearEntity<TGearStatType>,
>(
  gear: TGearEntity[],
  type: TGearStatType,
) => {
  // Generate a unique list of stat values sorted in descending order
  const set = gear
    .map(item => item.stats)
    .sort((a, b) => b[type as keyof typeof b] - a[type as keyof typeof a])
    .reduce((acc, stats) => acc.add(stats[type as keyof typeof stats]), new Set<number>());

  return [...set];
};

/**
 * Create an object containing the highest, second highest and lowest stat values
 *
 * @param gear Source gear list
 * @param type Target stat type to process
 */
const getGearStatInfo = <
  TGearStatType extends GearStatType,
  TGearEntity extends GearEntity<TGearStatType>,
>(
  gear: TGearEntity[],
  type: TGearStatType,
) => {
  // Get all available values of the specified stat in the list of gear
  const values = getGearStatValues(gear, type);

  switch (values.length) {
    case 0:
      return createGearStatInfo(0, 0, 0);
    case 1:
      return createGearStatInfo(values[0], values[0], values[0]);
    case 2:
      return createGearStatInfo(values[0], values[1], values[1]);
    case 3:
      return createGearStatInfo(values[0], values[1], values[2]);
  }

  return createGearStatInfo(values[0], values[1], values[values.length - 1]);
};

/**
 * Create a map of all available gear stats and their info objects
 *
 * @param gear Source gear list
 */
export const getGearStatInfoMap = <TGearStatType extends GearStatType>(
  gear: GearEntity<TGearStatType>[],
) => {
  const [first] = gear;
  const stats = Object.keys(first.stats) as TGearStatType[];

  return stats.reduce(
    (acc, type) => ({ ...acc, [type]: getGearStatInfo(gear, type) }),
    {} as GearStatInfoMap<TGearStatType>,
  );
};

/**
 * Get name of the specified gear stat
 *
 * @param type Gear stat type
 */
export const getGearStatName = (type: GearStatType) => statNameMap.get(type);
