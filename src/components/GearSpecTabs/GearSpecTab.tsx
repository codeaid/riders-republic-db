import { useMemo } from 'react';
import { GearItemGrid } from 'components';
import {
  useGearItemPersistence,
  useGearItems,
  useGearItemStatsComparisonMap,
} from 'hooks';
import { GearSpec } from 'types/specs';
import { GearSpecTabProps } from './types';

export const GearSpecTab = <TGearSpec extends GearSpec>(
  props: GearSpecTabProps<TGearSpec>,
) => {
  const { spec } = props;

  // Retrieve gear item persistence helpers
  const { toggleGearItemPersisted, isGearItemPersisted } =
    useGearItemPersistence();

  // Retrieve gear items associated with the current specialization
  const items = useGearItems(spec.type);

  // Calculate stats comparison for all items in current specialization
  const comparisonMap = useGearItemStatsComparisonMap(spec.type);

  // Updated owned flag on each item depending on whether it is persisted or not
  const itemsOwned = useMemo(
    () =>
      items.map(item => ({
        ...item,
        owned: isGearItemPersisted(item),
      })),
    [isGearItemPersisted, items],
  );

  return (
    <GearItemGrid
      comparisonMap={comparisonMap}
      items={itemsOwned}
      onToggleItem={toggleGearItemPersisted}
    />
  );
};
