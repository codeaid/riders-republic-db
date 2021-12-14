import { GearItem } from 'types/gear';

export interface GearItemGridProps<TGearItem extends GearItem> {
  items: Array<TGearItem>;
}
