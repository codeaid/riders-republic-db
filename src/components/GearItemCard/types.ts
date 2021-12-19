import { GearItem } from 'types/gear';
import { GearItemStatsComparisonMap } from 'types/stats';

export type GearItemCardToggleHandler = (item: GearItem) => void;

export interface GearItemCardProps<TGearItem extends GearItem> {
  comparisonMap: GearItemStatsComparisonMap<TGearItem>;
  item: TGearItem;
  onToggle: GearItemCardToggleHandler;
}
