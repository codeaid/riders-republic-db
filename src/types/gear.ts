import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import {
  AirSpecType,
  BikeRaceSpecType,
  BikeTricksSpecType,
  CategorySpec,
  SnowRaceSpecType,
  SnowTricksSpecType,
  SpecType,
} from 'types/specs';

type GearItemEntity<TCategoryType extends CategoryType, TStats> = {
  brand: Brand;
  category: TCategoryType;
  kind?: string;
  model: string;
  score: number;
  spec: CategorySpec<TCategoryType>;
  stats: TStats;
};

export type BikeStats = {
  sprint: number;
  speed: number;
  airRotation: number;
  grip: number;
  absorption: number;
};

export type RocketwingStats = {
  speed: number;
  mobility: number;
  engineBoost: number;
};

export type SnowStats = {
  speed: number;
  airRotation: number;
  deepSnow: number;
  absorption: number;
};

export type WingsuitStats = {
  vertical: number;
  horizontal: number;
  slowMode: number;
};

// Generate bike gear union
type BikeRaceGearItem = GearItemEntity<CategoryType.BikeRace, BikeStats>;
type BikeTricksGearItem = GearItemEntity<CategoryType.BikeTricks, BikeStats>;
export type BikeGearItem = BikeRaceGearItem | BikeTricksGearItem;

// Generate snow gear union
type SnowRaceGearItem = GearItemEntity<CategoryType.SnowRace, SnowStats>;
type SnowTricksGearItem = GearItemEntity<CategoryType.SnowTricks, SnowStats>;
export type SnowGearItem = SnowRaceGearItem | SnowTricksGearItem;

// Specialized gear types
export type RocketwingGearItem = GearItemEntity<
  CategoryType.Air,
  RocketwingStats
>;
export type WingsuitGearItem = GearItemEntity<CategoryType.Air, WingsuitStats>;

// Union of all available gear types
export type GearItem =
  | BikeGearItem
  | RocketwingGearItem
  | SnowGearItem
  | WingsuitGearItem;

export type GearSpecItem<TSpecType extends SpecType> =
  TSpecType extends AirSpecType.Rocketwing
    ? RocketwingGearItem
    : TSpecType extends AirSpecType.Wingsuit
    ? WingsuitGearItem
    : TSpecType extends BikeRaceSpecType.Downhill
    ? BikeGearItem
    : TSpecType extends BikeRaceSpecType.Road
    ? BikeGearItem
    : TSpecType extends BikeTricksSpecType.Freeride
    ? BikeGearItem
    : TSpecType extends BikeTricksSpecType.Slopestyle
    ? BikeGearItem
    : TSpecType extends SnowRaceSpecType.DeepSnow
    ? SnowGearItem
    : TSpecType extends SnowRaceSpecType.Downhill
    ? SnowGearItem
    : TSpecType extends SnowTricksSpecType.OffTrack
    ? SnowGearItem
    : TSpecType extends SnowTricksSpecType.Snowpark
    ? SnowGearItem
    : never;

export type GearItemStats<TGearItem extends GearItem> =
  TGearItem extends BikeGearItem
    ? BikeStats
    : TGearItem extends RocketwingGearItem
    ? RocketwingStats
    : TGearItem extends SnowGearItem
    ? SnowStats
    : TGearItem extends WingsuitGearItem
    ? WingsuitStats
    : never;

export type GearSpecStats<TSpecType extends SpecType> =
  TSpecType extends AirSpecType.Rocketwing
    ? RocketwingStats
    : TSpecType extends AirSpecType.Wingsuit
    ? WingsuitStats
    : TSpecType extends BikeRaceSpecType.Downhill
    ? BikeStats
    : TSpecType extends BikeRaceSpecType.Road
    ? BikeStats
    : TSpecType extends BikeTricksSpecType.Freeride
    ? BikeStats
    : TSpecType extends BikeTricksSpecType.Slopestyle
    ? BikeStats
    : TSpecType extends SnowRaceSpecType.DeepSnow
    ? SnowStats
    : TSpecType extends SnowRaceSpecType.Downhill
    ? SnowStats
    : TSpecType extends SnowTricksSpecType.OffTrack
    ? SnowStats
    : TSpecType extends SnowTricksSpecType.Snowpark
    ? SnowStats
    : never;

// Best, second best and worst stats values in a specialization
export type GearItemStatsComparison = {
  best: number;
  second?: number;
  worst: number;
};
