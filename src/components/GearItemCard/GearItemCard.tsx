import { useCallback } from 'react';
import { GearItemStats, GearScore } from 'components';
import { useBrandName, useGearSpec } from 'hooks';
import { GearItem } from 'types/gear';
import {
  GearItemCardBorder,
  GearItemCardHeader,
  GearItemCardHeaderBrand,
  GearItemCardHeaderKind,
  GearItemCardHeaderLabels,
  GearItemCardHeaderModel,
  GearItemCardMarker,
  GearItemCardStatsWrapper,
  StyledGearItemCard,
} from './GearItemCard.styled';
import { GearItemCardProps } from './types';

export const GearItemCard = <TGearItem extends GearItem>(
  props: GearItemCardProps<TGearItem>,
) => {
  const { comparisonMap, item, onToggle } = props;

  // Retrieve name of the brand associated with the item
  const brand = useBrandName(item.brand);

  // Retrieve specialization entity associated with the item
  const spec = useGearSpec(item.spec);

  /**
   * Handle clicks on the card component
   */
  const handleTogglePersistence = useCallback(
    () => onToggle(item),
    [item, onToggle],
  );

  return (
    <StyledGearItemCard onClick={handleTogglePersistence}>
      {item.owned && <GearItemCardMarker />}
      <GearItemCardBorder />
      <GearItemCardHeader>
        <GearItemCardHeaderLabels>
          <GearItemCardHeaderBrand>{brand}</GearItemCardHeaderBrand>
          <GearItemCardHeaderModel title={item.model}>
            {item.model}
            {item.kind && (
              <GearItemCardHeaderKind>{item.kind}</GearItemCardHeaderKind>
            )}
          </GearItemCardHeaderModel>
        </GearItemCardHeaderLabels>
        <GearScore code={spec.code} score={item.score} />
      </GearItemCardHeader>
      <GearItemCardStatsWrapper>
        <GearItemStats comparisonMap={comparisonMap} item={item} />
      </GearItemCardStatsWrapper>
    </StyledGearItemCard>
  );
};
