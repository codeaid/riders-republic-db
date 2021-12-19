import { GearItemCardToggleHandler } from 'components';
import { GearItem } from 'types/gear';
import { GearItemStatsComparisonMap } from 'types/stats';

export interface GearItemGridProps<TGearItem extends GearItem> {
  comparisonMap: GearItemStatsComparisonMap<TGearItem>;
  items: Array<TGearItem>;
  onToggleItem: GearItemCardToggleHandler;
}
