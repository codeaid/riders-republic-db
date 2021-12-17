import {
  BikeGearItem,
  GearItem,
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
