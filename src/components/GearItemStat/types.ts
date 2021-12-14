import { GearItemStatsComparison } from 'types/gear';

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
