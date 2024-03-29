import { useMemo } from 'react';
import {
  isBikeGearItem,
  isBmxGearItem,
  isRocketwingGearItem,
  isSnowGearItem,
  isWingsuitGearItem,
} from 'lib/gear';
import {
  BikeGearItem,
  BmxGearItem,
  GearItem,
  RocketwingGearItem,
  SnowGearItem,
  WingsuitGearItem,
} from 'types/gear';
import { GearItemStatsComparisonMap } from 'types/stats';
import { StyledGearItemStats } from './GearItemStats.styled';
import { GearItemStatsBike } from './GearItemStatsBike';
import { GearItemStatsBmx } from './GearItemStatsBmx';
import { GearItemStatsRocketwing } from './GearItemStatsRocketwing';
import { GearItemStatsSnow } from './GearItemStatsSnow';
import { GearItemStatsWingsuit } from './GearItemStatsWingsuit';
import { GearItemStatsProps } from './types';

export const GearItemStats = <TGearItem extends GearItem>(
  props: GearItemStatsProps<TGearItem>,
) => {
  const { comparisonMap, item } = props;

  const stats = useMemo(() => {
    if (isBikeGearItem(item)) {
      return (
        <GearItemStatsBike
          comparisonMap={
            comparisonMap as GearItemStatsComparisonMap<BikeGearItem>
          }
          item={item}
        />
      );
    } else if (isBmxGearItem(item)) {
      return (
        <GearItemStatsBmx
          comparisonMap={
            comparisonMap as GearItemStatsComparisonMap<BmxGearItem>
          }
          item={item as any}
        />
      );
    } else if (isRocketwingGearItem(item)) {
      return (
        <GearItemStatsRocketwing
          comparisonMap={
            comparisonMap as GearItemStatsComparisonMap<RocketwingGearItem>
          }
          item={item}
        />
      );
    } else if (isSnowGearItem(item)) {
      return (
        <GearItemStatsSnow
          comparisonMap={
            comparisonMap as GearItemStatsComparisonMap<SnowGearItem>
          }
          item={item}
        />
      );
    } else if (isWingsuitGearItem(item)) {
      return (
        <GearItemStatsWingsuit
          comparisonMap={
            comparisonMap as GearItemStatsComparisonMap<WingsuitGearItem>
          }
          item={item}
        />
      );
    }
  }, [comparisonMap, item]);

  return <StyledGearItemStats>{stats}</StyledGearItemStats>;
};
