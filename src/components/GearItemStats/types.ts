import {
  BikeGearItem,
  GearItem,
  GearItemStatsComparisonMap,
  RocketwingGearItem,
  SnowGearItem,
  WingsuitGearItem,
} from 'types/gear';

export interface GearItemStatsBikeProps {
  comparisonMap: GearItemStatsComparisonMap<BikeGearItem>;
  item: BikeGearItem;
}

export interface GearItemStatsRocketwingProps {
  comparisonMap: GearItemStatsComparisonMap<RocketwingGearItem>;
  item: RocketwingGearItem;
}

export interface GearItemStatsSnowProps {
  comparisonMap: GearItemStatsComparisonMap<SnowGearItem>;
  item: SnowGearItem;
}

export interface GearItemStatsWingsuitProps {
  comparisonMap: GearItemStatsComparisonMap<WingsuitGearItem>;
  item: WingsuitGearItem;
}

export interface GearItemStatsProps<TGearItem extends GearItem> {
  comparisonMap: GearItemStatsComparisonMap<TGearItem>;
  item: TGearItem;
}
