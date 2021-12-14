import { useMemo } from 'react';
import { GearItemCard } from 'components';
import { GearItem } from 'types/gear';
import { StyledGearItemGrid } from './GearItemGrid.styled';
import { GearItemGridProps } from './types';

export const GearItemGrid = <TGearItem extends GearItem>(
  props: GearItemGridProps<TGearItem>,
) => {
  const { items } = props;

  // Build a list of gear item card children
  const children = useMemo(
    () =>
      items.length
        ? items.map(item => <GearItemCard item={item} key={item.model} />)
        : 'There are no items in this specialization',
    [items],
  );

  return <StyledGearItemGrid>{children}</StyledGearItemGrid>;
};
