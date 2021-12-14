import { GearItem } from 'types/gear';

export interface GearItemCardProps<TGearItem extends GearItem> {
  item: TGearItem;
}
