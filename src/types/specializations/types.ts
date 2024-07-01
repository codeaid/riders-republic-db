import type { GearEntity } from '@/types/gear';
import type { GearStatType } from '@/types/stats';

export type SpecializationEntity<
  TSpecialization extends string,
  TGearStatType extends GearStatType,
> = {
  id: TSpecialization;
  code: string;
  description: string;
  gear: GearEntity<TGearStatType>[];
  name: string;
  slug: string;
};
