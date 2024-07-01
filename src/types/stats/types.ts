export interface GearStatRank {
  highest: number;
  lowest: number;
  secondHighest: number;
}

export type GearStatType =
  | 'absorption'
  | 'air-rotation'
  | 'board-tricks'
  | 'deep-snow'
  | 'deep-snow-race'
  | 'deep-snow-tricks'
  | 'engine-boost'
  | 'grip'
  | 'mobility'
  | 'mobility-horizontal'
  | 'mobility-vertical'
  | 'slow-mode'
  | 'speed'
  | 'sprint';

export type GearStatsEntity<TGearStat extends GearStatType> = {
  [K in TGearStat]: number;
};

export type GearStatInfoMap<TGearStatType extends GearStatType> = Record<
  TGearStatType,
  GearStatRank
>;
