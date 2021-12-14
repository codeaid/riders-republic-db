import { orderBy } from 'lodash';
import { getBrandName } from 'lib/brands';
import {
  BikeGearItem,
  GearItem,
  GearSpecItem,
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
