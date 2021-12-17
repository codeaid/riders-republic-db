import { useCallback } from 'react';
import { GearItemStats, GearScore } from 'components';
import {
  useBrandName,
  useGearItemPersistence,
  useGearItemStatsComparisonMap,
  useGearSpec,
} from 'hooks';
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
  const { item } = props;

  // Retrieve name of the brand associated with the item
  const brand = useBrandName(item.brand);

  // Retrieve gear persistence helpers
  const { erase, isPersisted, persist } = useGearItemPersistence(item);

  // Retrieve specialization entity associated with the item
  const spec = useGearSpec(item.spec);

  // Calculate stats comparison for all items in current specialization
  const comparisonMap = useGearItemStatsComparisonMap(item.spec);

  /**
   * Handle clicks on the card component
   */
  const handleClick = useCallback(
    () => (isPersisted ? erase() : persist()),
    [isPersisted, erase, persist],
  );

  return (
    <StyledGearItemCard onClick={handleClick}>
      {isPersisted && <GearItemCardMarker />}
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
