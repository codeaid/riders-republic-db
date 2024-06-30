import type { GearEntity } from './types';
import type {
  AirRocketwingGearStat,
  AirWingsuitGearStat,
  BikeGearStat,
  SnowGearStat,
} from '@/types/stats';

export type AirRocketwingGear = GearEntity<AirRocketwingGearStat>;
export type AirWingsuitGear = GearEntity<AirWingsuitGearStat>;
export type BikeGear = GearEntity<BikeGearStat>;
export type SnowGear = GearEntity<SnowGearStat>;

export type Gear = AirRocketwingGear | AirWingsuitGear | BikeGear | SnowGear;
