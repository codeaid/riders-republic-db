import { GearItem } from 'types/gear';
import { GearItemStats } from 'types/mapping';

export type BikeStats = {
  sprint: number;
  speed: number;
  airRotation: number;
  grip: number;
  absorption: number;
};

export type BmxStats = BikeStats;

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

// Best, second best and worst stats values in a specialization
export type GearItemStatsComparison = {
  best: number;
  second?: number;
  worst: number;
};

export type GearItemStatsComparisonMap<TGearItem extends GearItem> = {
  [K in keyof GearItemStats<TGearItem>]: GearItemStatsComparison;
};
