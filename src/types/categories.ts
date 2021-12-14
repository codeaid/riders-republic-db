export enum CategoryType {
  Air = 'air',
  BikeRace = 'bike:race',
  BikeTricks = 'bike:tricks',
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
type SnowRaceCategory = CategoryEntity<CategoryType.SnowRace>;
type SnowTricksCategory = CategoryEntity<CategoryType.SnowTricks>;

// Category entity union
export type GearCategory =
  | AirCategory
  | BikeRaceCategory
  | BikeTricksCategory
  | SnowRaceCategory
  | SnowTricksCategory;
