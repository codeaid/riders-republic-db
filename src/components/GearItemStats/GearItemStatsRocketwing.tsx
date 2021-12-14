import { VoidFunctionComponent } from 'react';
import { GearItemStat } from 'components';
import { GearItemStatsRocketwingProps } from './types';

export const GearItemStatsRocketwing: VoidFunctionComponent<
  GearItemStatsRocketwingProps
> = props => {
  const { comparisonMap, item } = props;

  return (
    <>
      <GearItemStat
        comparison={comparisonMap.speed}
        type="speed"
        value={item.stats.speed}
      />
      <GearItemStat
        comparison={comparisonMap.mobility}
        type="mobility"
        value={item.stats.mobility}
      />
      <GearItemStat
        comparison={comparisonMap.engineBoost}
        type="engine-boost"
        value={item.stats.engineBoost}
      />
    </>
  );
};
