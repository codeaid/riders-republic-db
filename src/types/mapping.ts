import { CategoryType } from 'types/categories';
import {
  BikeGearItem,
  BmxGearItem,
  GearItem,
  RocketwingGearItem,
  SnowGearItem,
  WingsuitGearItem,
} from 'types/gear';
import {
  AirSpecType,
  BikeRaceSpecType,
  BikeTricksSpecType,
  BmxSpecType,
  SnowRaceSpecType,
  SnowTricksSpecType,
  SpecType,
} from 'types/specs';
import {
  BikeStats,
  BmxStats,
  RocketwingStats,
  SnowStats,
  WingsuitStats,
} from 'types/stats';

// Gear items associated with the specified category type
export type GearCategoryItem<TCategoryType extends CategoryType> =
  TCategoryType extends CategoryType.Air
    ? RocketwingGearItem | WingsuitGearItem
    : TCategoryType extends CategoryType.BikeRace | CategoryType.BikeTricks
    ? BikeGearItem
    : TCategoryType extends CategoryType.Bmx
    ? BmxGearItem
    : TCategoryType extends CategoryType.SnowRace | CategoryType.SnowTricks
    ? SnowGearItem
    : GearItem;

// Gear item type associated with the specified gear specialization type
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
    : TSpecType extends BmxSpecType.Dirt
    ? BmxGearItem
    : TSpecType extends BmxSpecType.Park
    ? BmxGearItem
    : TSpecType extends SnowRaceSpecType.DeepSnow
    ? SnowGearItem
    : TSpecType extends SnowRaceSpecType.Downhill
    ? SnowGearItem
    : TSpecType extends SnowTricksSpecType.OffTrack
    ? SnowGearItem
    : TSpecType extends SnowTricksSpecType.Snowpark
    ? SnowGearItem
    : never;

// Gear stats associated with the specified gear item entity
export type GearItemStats<TGearItem extends GearItem> =
  TGearItem extends BikeGearItem
    ? BikeStats
    : TGearItem extends BmxGearItem
    ? BmxStats
    : TGearItem extends RocketwingGearItem
    ? RocketwingStats
    : TGearItem extends SnowGearItem
    ? SnowStats
    : TGearItem extends WingsuitGearItem
    ? WingsuitStats
    : never;

// Gear stats type associated with the specified gear specialization type
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
    : TSpecType extends BmxSpecType.Dirt
    ? BmxStats
    : TSpecType extends BmxSpecType.Park
    ? BmxStats
    : TSpecType extends SnowRaceSpecType.DeepSnow
    ? SnowStats
    : TSpecType extends SnowRaceSpecType.Downhill
    ? SnowStats
    : TSpecType extends SnowTricksSpecType.OffTrack
    ? SnowStats
    : TSpecType extends SnowTricksSpecType.Snowpark
    ? SnowStats
    : never;

// Gear specialization type associated with the specified category type
export type GearCategorySpecType<TCategoryType extends CategoryType> =
  TCategoryType extends CategoryType.Air
    ? AirSpecType
    : TCategoryType extends CategoryType.BikeRace
    ? BikeRaceSpecType
    : TCategoryType extends CategoryType.BikeTricks
    ? BikeTricksSpecType
    : TCategoryType extends CategoryType.Bmx
    ? BmxSpecType
    : TCategoryType extends CategoryType.SnowRace
    ? SnowRaceSpecType
    : TCategoryType extends CategoryType.SnowTricks
    ? SnowTricksSpecType
    : never;
