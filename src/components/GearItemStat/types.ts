import { GearItemStatsComparison } from 'types/stats';

type GearItemStatType =
  | 'absorption'
  | 'air-rotation'
  | 'deep-snow'
  | 'engine-boost'
  | 'grip'
  | 'mobility'
  | 'mobility-horizontal'
  | 'mobility-vertical'
  | 'slow-mode'
  | 'speed'
  | 'sprint';

export interface GearItemStatProps {
  comparison?: GearItemStatsComparison;
  type: GearItemStatType;
  value: number;
}
