import { GearSpec } from 'types/specs';

export interface GearSpecTabProps<TGearSpec extends GearSpec> {
  spec: TGearSpec;
}

export interface GearSpecTabsProps {
  specs: Array<GearSpec>;
}
