<script lang="ts">
  import GearItem from '@/components/GearItem.svelte';
  import GearStat from '@/components/GearStat.svelte';
  import type { AirWingsuitGear } from '@/types/gear';
  import type { SpecializationEntity } from '@/types/specializations';
  import type { AirWingsuitGearStat, GearStatInfoMap } from '@/types/stats';

  export let gear: AirWingsuitGear;
  export let specialization: SpecializationEntity<string, AirWingsuitGearStat>;
  export let stats: GearStatInfoMap<AirWingsuitGearStat>;
</script>

<GearItem {gear} {specialization}>
  <GearStat
    type="mobility-vertical"
    value={gear.stats['mobility-vertical']}
    valueHighest={stats['mobility-vertical'].highest}
    valueSecond={stats['mobility-vertical'].secondHighest}
    valueLowest={stats['mobility-vertical'].lowest}
  />
  <GearStat
    type="mobility-horizontal"
    value={gear.stats['mobility-horizontal']}
    valueHighest={stats['mobility-horizontal'].highest}
    valueSecond={stats['mobility-horizontal'].secondHighest}
    valueLowest={stats['mobility-horizontal'].lowest}
  />
  <GearStat
    type="slow-mode"
    value={gear.stats['slow-mode']}
    valueHighest={stats['slow-mode'].highest}
    valueSecond={stats['slow-mode'].secondHighest}
    valueLowest={stats['slow-mode'].lowest}
  />
</GearItem>
