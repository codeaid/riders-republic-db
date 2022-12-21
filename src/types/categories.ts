export enum CategoryType {
  Air = 'air',
  BikeRace = 'bike:race',
  BikeTricks = 'bike:tricks',
  Bmx = 'bmx',
  SnowRace = 'snow:race',
  SnowTricks = 'snow:tricks',
}

// Category entity
type CategoryEntity<TCategoryType extends CategoryType> = {
  color: string;
  name: string;
  path: string;
  type: TCategoryType;
};

// Category entity types
type AirCategory = CategoryEntity<CategoryType.Air>;
type BikeRaceCategory = CategoryEntity<CategoryType.BikeRace>;
type BikeTricksCategory = CategoryEntity<CategoryType.BikeTricks>;
type BmxCategory = CategoryEntity<CategoryType.Bmx>;
type SnowRaceCategory = CategoryEntity<CategoryType.SnowRace>;
type SnowTricksCategory = CategoryEntity<CategoryType.SnowTricks>;

// Category entity union
export type GearCategory =
  | AirCategory
  | BikeRaceCategory
  | BikeTricksCategory
  | BmxCategory
  | SnowRaceCategory
  | SnowTricksCategory;
