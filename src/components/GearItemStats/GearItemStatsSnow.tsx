import { VoidFunctionComponent } from 'react';
import { GearItemStat } from 'components';
import { GearItemStatsSnowProps } from './types';

export const GearItemStatsSnow: VoidFunctionComponent<
  GearItemStatsSnowProps
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
        comparison={comparisonMap.airRotation}
        type="air-rotation"
        value={item.stats.airRotation}
      />
      <GearItemStat
        comparison={comparisonMap.deepSnow}
        type="deep-snow"
        value={item.stats.deepSnow}
      />
      <GearItemStat
        comparison={comparisonMap.absorption}
        type="absorption"
        value={item.stats.absorption}
      />
    </>
  );
};
