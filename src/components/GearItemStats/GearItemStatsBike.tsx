import { VoidFunctionComponent } from 'react';
import { GearItemStat } from 'components';
import { GearItemStatsBikeProps } from './types';

export const GearItemStatsBike: VoidFunctionComponent<
  GearItemStatsBikeProps
> = props => {
  const { comparisonMap, item } = props;

  return (
    <>
      <GearItemStat
        comparison={comparisonMap.sprint}
        type="sprint"
        value={item.stats.sprint}
      />
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
        comparison={comparisonMap.grip}
        type="grip"
        value={item.stats.grip}
      />
      <GearItemStat
        comparison={comparisonMap.absorption}
        type="absorption"
        value={item.stats.absorption}
      />
    </>
  );
};
