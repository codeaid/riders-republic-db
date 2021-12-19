import { CategoryType } from 'types/categories';
import { GearCategorySpecType } from 'types/mapping';

// Air specializations
export enum AirSpecType {
  Rocketwing = 'rocketwing',
  Wingsuit = 'wingsuit',
}

// Bike race specializations
export enum BikeRaceSpecType {
  Downhill = 'downhill',
  Road = 'road',
}

// Bike tricks specializations
export enum BikeTricksSpecType {
  Freeride = 'freeride',
  Slopestyle = 'slopestyle',
}

// Snow race specializations
export enum SnowRaceSpecType {
  DeepSnow = 'deep snow',
  Downhill = 'downhill ski',
}

// Snow tricks specializations
export enum SnowTricksSpecType {
  OffTrack = 'off track',
  Snowpark = 'snowpark',
}

// Union of all available specialization types
export type SpecType =
  | AirSpecType
  | BikeRaceSpecType
  | BikeTricksSpecType
  | SnowRaceSpecType
  | SnowTricksSpecType;

// Specialization entity
type GearSpecEntity<TCategoryType extends CategoryType> = {
  category: TCategoryType;
  code: string;
  description: string;
  name: string;
  type: GearCategorySpecType<TCategoryType>;
};

// Category specialization entity types
type AirSpec = GearSpecEntity<CategoryType.Air>;
type BikeRaceSpec = GearSpecEntity<CategoryType.BikeRace>;
type BikeTricksSpec = GearSpecEntity<CategoryType.BikeTricks>;
type SnowRaceSpec = GearSpecEntity<CategoryType.SnowRace>;
type SnowTricksSpec = GearSpecEntity<CategoryType.SnowTricks>;

// Category specialization entity union
export type GearSpec =
  | AirSpec
  | BikeRaceSpec
  | BikeTricksSpec
  | SnowRaceSpec
  | SnowTricksSpec;
