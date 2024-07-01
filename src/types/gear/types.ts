import type { Brand } from '@/types/brands';
import type { GearStatsEntity, GearStatType } from '@/types/stats';

export type GearEntity<TGearStatType extends GearStatType, TGearKind extends string = string> = {
  brand: Brand;
  hash: string;
  kind?: TGearKind;
  model: string;
  score: number;
  stats: GearStatsEntity<TGearStatType>;
};
