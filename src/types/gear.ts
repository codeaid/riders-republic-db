import { Brand } from 'types/brands';
import { CategoryType } from 'types/categories';
import {
  BikeStats,
  RocketwingStats,
  SnowStats,
  WingsuitStats,
} from 'types/stats';
import { GearCategorySpecType } from 'types/mapping';

type GearItemEntity<TCategoryType extends CategoryType, TStats> = {
  brand: Brand;
  category: TCategoryType;
  kind?: string;
  model: string;
  owned?: boolean;
  score: number;
  spec: GearCategorySpecType<TCategoryType>;
  stats: TStats;
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
