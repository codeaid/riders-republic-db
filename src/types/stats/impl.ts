import type { GearStatType } from './types';

/**
 * Air specialization stats
 */
export type AirRocketwingGearStat = Extract<GearStatType, 'speed' | 'mobility' | 'engine-boost'>;
export type AirWingsuitGearStat = Extract<
  GearStatType,
  'mobility-vertical' | 'mobility-horizontal' | 'slow-mode'
>;

/**
 * Bike specialization stats
 */
export type BikeGearStat = Extract<
  GearStatType,
  'sprint' | 'speed' | 'air-rotation' | 'grip' | 'absorption'
>;

/**
 * Snow specialization stats
 */
export type SnowGearStat = Extract<
  GearStatType,
  'speed' | 'air-rotation' | 'deep-snow' | 'absorption'
>;
