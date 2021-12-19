import { useMemo } from 'react';
import { GearItemCard } from 'components';
import { GearItem } from 'types/gear';
import { StyledGearItemGrid } from './GearItemGrid.styled';
import { GearItemGridProps } from './types';

export const GearItemGrid = <TGearItem extends GearItem>(
  props: GearItemGridProps<TGearItem>,
) => {
  const { comparisonMap, items, onToggleItem } = props;

  // Build a list of gear item card children
  const children = useMemo(
    () =>
      items.length
        ? items.map((item, index) => (
            <GearItemCard
              comparisonMap={comparisonMap}
              item={item}
              key={index}
              onToggle={onToggleItem}
            />
          ))
        : 'There are no items in this specialization',
    [comparisonMap, items, onToggleItem],
  );

  return <StyledGearItemGrid>{children}</StyledGearItemGrid>;
};
