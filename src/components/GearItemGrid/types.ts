import { GearItemCardToggleHandler } from 'components';
import { GearItem, GearItemStatsComparisonMap } from 'types/gear';

export interface GearItemGridProps<TGearItem extends GearItem> {
  comparisonMap: GearItemStatsComparisonMap<TGearItem>;
  items: Array<TGearItem>;
  onToggleItem: GearItemCardToggleHandler;
}
