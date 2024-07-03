import type { SpecializationEntity } from './types';
import type {
  AirRocketwingGearStat,
  AirWingsuitGearStat,
  BikeGearStat,
  SkateboardGearStat,
  SnowGearStat,
} from '@/types/stats';
import type { GetEntityIds } from '@/types/utils';

/**
 * Air category entities
 */
export type AirRocketwingSpecialization = SpecializationEntity<'rocketwing', AirRocketwingGearStat>;
export type AirWingsuitSpecialization = SpecializationEntity<'wingsuit', AirWingsuitGearStat>;

/**
 * Bike (race) category entities
 */
export type BikeDownhillSpecialization = SpecializationEntity<'downhill', BikeGearStat>;
export type BikeRoadSpecialization = SpecializationEntity<'road', BikeGearStat>;

/**
 * Bike (tricks) category entities
 */
export type BikeFreerideSpecialization = SpecializationEntity<'freeride', BikeGearStat>;
export type BikeSlopestyleSpecialization = SpecializationEntity<'slopestyle', BikeGearStat>;

/**
 * BMX category entities
 */
export type BmxParkSpecialization = SpecializationEntity<'park', BikeGearStat>;
export type BmxDirtSpecialization = SpecializationEntity<'dirt', BikeGearStat>;

/**
 * Skateboard category entities
 */
export type SkateboardStreetSpecialization = SpecializationEntity<'street', SkateboardGearStat>;
export type SkateboardRampSpecialization = SpecializationEntity<'ramp', SkateboardGearStat>;

/**
 * Snow (race) category entities
 */
export type SnowDownhillSkiSpecialization = SpecializationEntity<'downhill ski', SnowGearStat>;
export type SnowDeepSnowSpecialization = SpecializationEntity<'deep snow', SnowGearStat>;

/**
 * Snow (tricks) category entities
 */
export type SnowSnowparkSpecialization = SpecializationEntity<'snowpark', SnowGearStat>;
export type SnowOfftrackSpecialization = SpecializationEntity<'off track', SnowGearStat>;

/**
 * Global specialization entity types
 */
export type Specialization =
  | AirRocketwingSpecialization
  | AirWingsuitSpecialization
  | BikeDownhillSpecialization
  | BikeFreerideSpecialization
  | BikeRoadSpecialization
  | BikeSlopestyleSpecialization
  | BmxDirtSpecialization
  | BmxParkSpecialization
  | SkateboardRampSpecialization
  | SkateboardStreetSpecialization
  | SnowDeepSnowSpecialization
  | SnowDownhillSkiSpecialization
  | SnowOfftrackSpecialization
  | SnowSnowparkSpecialization;
export type SpecializationId = GetEntityIds<Specialization>;
