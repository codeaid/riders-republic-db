import { VoidFunctionComponent } from 'react';
import { GearItemStat } from 'components';
import { GearItemStatsWingsuitProps } from './types';

export const GearItemStatsWingsuit: VoidFunctionComponent<
  GearItemStatsWingsuitProps
> = props => {
  const { comparisonMap, item } = props;

  return (
    <>
      <GearItemStat
        comparison={comparisonMap.vertical}
        type="mobility-vertical"
        value={item.stats.vertical}
      />
      <GearItemStat
        comparison={comparisonMap.horizontal}
        type="mobility-horizontal"
        value={item.stats.horizontal}
      />
      <GearItemStat
        comparison={comparisonMap.slowMode}
        type="slow-mode"
        value={item.stats.slowMode}
      />
    </>
  );
};
