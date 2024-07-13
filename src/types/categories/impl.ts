import type { CategoryEntity, MultiCategoryEntity } from './types';
import type {
  AirRocketwingSpecialization,
  AirWingsuitSpecialization,
  BikeDownhillSpecialization,
  BikeFreerideSpecialization,
  BikeRoadSpecialization,
  BikeSlopestyleSpecialization,
  BmxDirtSpecialization,
  BmxParkSpecialization,
  SkateboardRampSpecialization,
  SkateboardStreetSpecialization,
  SnowDeepSnowSpecialization,
  SnowDownhillSkiSpecialization,
  SnowOfftrackSpecialization,
  SnowSnowparkSpecialization,
} from '@/types/specializations';
import type { FilterExtends, GetEntityIds } from '@/types/utils';

/**
 * Air category entities
 */
export type AirCategory = CategoryEntity<
  'air',
  [AirRocketwingSpecialization, AirWingsuitSpecialization]
>;

/**
 * Bike (race) category entity
 */
export type BikeRaceCategory = CategoryEntity<
  'bike:race',
  [BikeDownhillSpecialization, BikeRoadSpecialization]
>;

/**
 * Bike (tricks) category entity
 */
export type BikeTricksCategory = CategoryEntity<
  'bike:tricks',
  [BikeFreerideSpecialization, BikeSlopestyleSpecialization]
>;

/**
 * Main bike category entity
 */
export type BikeCategory = MultiCategoryEntity<'bikes', [BikeRaceCategory, BikeTricksCategory]>;

/**
 * BMX category entity
 */
export type BmxCategory = CategoryEntity<'bmx', [BmxParkSpecialization, BmxDirtSpecialization]>;

/**
 * Skateboard entity
 */
export type SkateboardCategory = CategoryEntity<
  'skateboard',
  [SkateboardStreetSpecialization, SkateboardRampSpecialization]
>;

/**
 * Snow (race) category entity
 */
export type SnowRaceCategory = CategoryEntity<
  'snow:race',
  [SnowDownhillSkiSpecialization, SnowDeepSnowSpecialization]
>;

/**
 * Snow (tricks) category entity
 */
export type SnowTricksCategory = CategoryEntity<
  'snow:tricks',
  [SnowSnowparkSpecialization, SnowOfftrackSpecialization]
>;

/**
 * Main snow category entity
 */
export type SnowCategory = MultiCategoryEntity<'snow', [SnowRaceCategory, SnowTricksCategory]>;
export type SnowCategoryId = GetEntityIds<SnowRaceCategory | SnowTricksCategory>;

/**
 * Core category unions
 */
export type RootCategory =
  | AirCategory
  | BikeCategory
  | BmxCategory
  | SkateboardCategory
  | SnowCategory;

export type SingleCategory = FilterExtends<RootCategory, CategoryEntity<any, any>>;
export type MultiCategory = FilterExtends<RootCategory, MultiCategoryEntity<any, any>>;
