import { GearItem, GearItemStatsComparisonMap } from 'types/gear';

export type GearItemCardToggleHandler = (item: GearItem) => void;

export interface GearItemCardProps<TGearItem extends GearItem> {
  comparisonMap: GearItemStatsComparisonMap<TGearItem>;
  item: TGearItem;
  onToggle: GearItemCardToggleHandler;
}
