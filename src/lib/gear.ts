import { orderBy } from 'lodash';
import { getBrandName } from 'lib/brands';
import { GearItem, GearSpecItem } from 'types/gear';
import { SpecType } from 'types/specs';

/**
 * Find gear items belonging to the specified specialization
 *
 * @param {Array<GearItem>} gear Source gear
 * @param {SpecType} spec Target specialization
 */
export const getGearSpecItems = <TSpecType extends SpecType>(
  gear: Array<GearItem>,
  spec: TSpecType,
) => {
  // Find gear items
  const items = gear.filter(item => item.spec === spec);

  // Sort gear items by score, brand name and model
  return orderBy(
    items,
    [g => g.score, g => getBrandName(g.brand), g => g.model],
    ['desc', 'asc', 'asc'],
  ) as Array<GearSpecItem<TSpecType>>;
};
