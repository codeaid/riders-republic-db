import { GearItemStats, GearScore } from 'components';
import {
  useGearItemStatsComparisonMap,
  useBrandName,
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

  // Retrieve specialization entity associated with the item
  const spec = useGearSpec(item.spec);

  // Calculate stats comparison for all items in current specialization
  const comparisonMap = useGearItemStatsComparisonMap(item.spec);

  return (
    <StyledGearItemCard>
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
